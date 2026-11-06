const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver =
  !reducedMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px 80px 0px" }
      )
    : null;

function reveal(element) {
  if (!revealObserver) return;
  element.classList.add("reveal");
  revealObserver.observe(element);
}

function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 0);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function loadProjects() {
  // Project data is loaded by <script src="data/projects.js"> so that opening
  // index.html straight from disk works. fetch() would be blocked on file://.
  if (!Array.isArray(window.PROJECTS)) throw new Error("data/projects.js did not load");
  return window.PROJECTS;
}

function projectRow(project) {
  const row = el("a", "project-row");
  row.href = `case.html?slug=${encodeURIComponent(project.slug)}`;

  const media = el("div", "project-row__media");
  const image = el("img");
  image.src = project.cover;
  image.alt = "";
  image.loading = "lazy";
  media.append(image);

  row.append(
    media,
    el("h2", "h3 project-row__title", project.title),
    el("p", "body project-row__summary", project.summary),
    el("p", "label project-row__meta", [...project.tags, project.year].join(" / "))
  );
  return row;
}

async function renderHome(list) {
  const year = document.querySelector("[data-work-year]");
  try {
    const projects = loadProjects();
    if (year && projects.length) {
      year.textContent = Math.max(...projects.map((project) => project.year));
    }
    projects.forEach((project) => {
      const row = projectRow(project);
      list.append(row);
      reveal(row);
    });
  } catch (error) {
    console.error(error);
    list.append(el("p", "body", "The project list could not be loaded."));
  }
}

function sectionRule(index, title, year) {
  const rule = el("div", "section-rule");
  rule.append(
    el("span", "label", `${String(index).padStart(2, "0")} / ${title}`),
    el("span", "label", year)
  );
  return rule;
}

function renderBlock(block, project, sectionIndex) {
  if (block.type === "section") return sectionRule(sectionIndex, block.value, project.year);
  if (block.type === "heading") return el("h2", "h3 case-heading", block.value);
  if (block.type === "text") return el("p", "body", block.value);
  if (block.type === "caption") return el("p", "body case-caption", block.value);
  const image = el("img", "case-image");
  image.src = block.value;
  image.alt = block.alt || `${project.title} case study image`;
  if (block.width && block.height) {
    image.width = block.width;
    image.height = block.height;
  }
  image.loading = "lazy";
  return image;
}

function renderMissing(root, message) {
  const back = el("a", "label back-link", "Back to work");
  back.href = "index.html#work";
  root.replaceChildren(back, el("h1", "h2", message));
}

async function renderCase(root) {
  const slug = new URLSearchParams(window.location.search).get("slug");
  try {
    const projects = loadProjects();
    const project = projects.find((item) => item.slug === slug);
    if (!project) {
      renderMissing(root, "Project not found");
      return;
    }

    document.title = `${project.title}, MinJun Huang`;

    const back = el("a", "label back-link", "Back to work");
    back.href = "index.html#work";
    const blocks = el("div", "case-blocks");
    let sectionIndex = 0;
    project.blocks.forEach((block) => {
      if (block.type === "section") sectionIndex += 1;
      const element = renderBlock(block, project, sectionIndex);
      blocks.append(element);
      reveal(element);
    });

    root.replaceChildren(
      back,
      el("h1", "h2", project.title),
      el("p", "label case-meta", [...project.tags, project.year].join(" / ")),
      blocks
    );
  } catch (error) {
    console.error(error);
    renderMissing(root, "This project could not be loaded");
  }
}

initNav();
document.querySelectorAll("[data-reveal]").forEach(reveal);

const projectList = document.querySelector("[data-project-list]");
if (projectList) renderHome(projectList);

const caseRoot = document.querySelector("[data-case]");
if (caseRoot) renderCase(caseRoot);
