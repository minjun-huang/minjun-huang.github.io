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

function initTown() {
  const town = document.querySelector("[data-town]");
  if (!town) return;
  const svg = town.querySelector(".town__svg");
  town.querySelectorAll(".town__plot[href]").forEach((plot) => {
    plot.addEventListener("click", (event) => {
      if (reducedMotion || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      // Zoom toward the plot that was clicked, then go to its case page.
      const box = svg.viewBox.baseVal;
      const x = ((plot.dataset.cx - box.x) / box.width) * 100;
      const y = ((plot.dataset.cy - box.y) / box.height) * 100;
      svg.style.transformOrigin = `${x}% ${y}%`;
      town.classList.add("is-leaving");
      window.setTimeout(() => { window.location.href = plot.getAttribute("href"); }, 420);
    });
  });
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
  const wip = project.status === "wip";
  // A project in progress has no case page yet: a plain block, not a link.
  const row = el(wip ? "div" : "a", wip ? "project-row project-row--wip" : "project-row");
  if (wip) {
    row.tabIndex = 0;
  } else {
    row.href = `case.html?slug=${encodeURIComponent(project.slug)}`;
  }

  const media = el("div", "project-row__media");
  const image = el("img");
  image.src = project.cover;
  image.alt = "";
  image.loading = "lazy";
  media.append(image);
  if (wip) {
    const tape = el("div", "wip-tape");
    tape.setAttribute("aria-hidden", "true");
    const text = el("span", "wip-tape__text", "Under construction \u00b7 ".repeat(8));
    tape.append(text);
    media.append(tape);
  }

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

function sectionRule(index, title) {
  const rule = el("div", "section-rule");
  rule.append(el("span", "label", `${String(index).padStart(2, "0")} / ${title}`));
  return rule;
}

// Phone-width version of a feature board: the words are real text and each
// screen is its own image, so nothing has to be read at a quarter of its size.
function featureMobile(data) {
  const wrap = el("div", "feature-m");
  const head = el("div", "feature-m__head");
  head.append(el("span", "feature-m__no", data.no), el("h3", "feature-m__title", data.title), el("p", "feature-m__text", data.text));
  const shots = el("div", `feature-m__shots feature-m__shots--${data.shots.length > 2 ? "grid" : "row"}`);
  data.shots.forEach((shot) => {
    const fig = el("figure", "feature-m__shot");
    const img = el("img");
    img.src = shot.src;
    img.alt = `${data.title}: ${shot.label} screen`;
    img.width = shot.width;
    img.height = shot.height;
    img.loading = "lazy";
    const cap = el("figcaption", "feature-m__cap");
    cap.append(el("span", "label", shot.label));
    if (shot.caption) cap.append(el("span", "feature-m__note", shot.caption));
    fig.append(img, cap);
    shots.append(fig);
  });
  wrap.append(head, shots);
  return wrap;
}

function renderBlock(block, project, sectionIndex) {
  if (block.type === "section") return sectionRule(sectionIndex, block.value);
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
  if (block.mobile) {
    // Board on wide screens, real text and single screens on phones.
    const both = el("div", "case-figure");
    image.classList.add("case-figure__board");
    both.append(image, featureMobile(block.mobile));
    return both;
  }
  // Boards carry small text. On a phone, tapping opens the full image to zoom.
  const link = el("a", "case-zoom");
  link.href = block.value;
  link.target = "_blank";
  link.rel = "noopener";
  link.append(image, el("span", "label case-zoom__hint", "Tap to enlarge"));
  return link;
}

function nextProject(allProjects, project) {
  const projects = allProjects.filter((item) => item.status !== "wip");
  if (projects.length < 2) return null;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const link = el("a", "next-project");
  link.href = `case.html?slug=${encodeURIComponent(next.slug)}`;
  const title = el("span", "h2 next-project__title", next.title);
  title.append(el("span", "stop", "."));
  link.append(el("span", "label", "Next project"), title, el("span", "body", next.summary));
  return link;
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
    const project = projects.find((item) => item.slug === slug && item.status !== "wip");
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

    const next = nextProject(projects, project);
    root.replaceChildren(
      back,
      el("h1", "h2", project.title),
      el("p", "label case-meta", [...project.tags, project.year].join(" / ")),
      blocks,
      ...(next ? [next] : [])
    );
  } catch (error) {
    console.error(error);
    renderMissing(root, "This project could not be loaded");
  }
}

initNav();
initTown();
document.querySelectorAll("[data-reveal]").forEach(reveal);

const projectList = document.querySelector("[data-project-list]");
if (projectList) renderHome(projectList);

const caseRoot = document.querySelector("[data-case]");
if (caseRoot) renderCase(caseRoot);
