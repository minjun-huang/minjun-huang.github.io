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
  shots.style.setProperty("--n", data.shots.length);
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
    fig.append(zoomable(img), cap);
    shots.append(fig);
  });
  wrap.append(head, shots);
  return wrap;
}

// Opens a screenshot at full size. Closes on click or Escape.
function zoomable(img) {
  const button = el("button", "zoom-btn");
  button.type = "button";
  button.setAttribute("aria-label", `Enlarge: ${img.alt}`);
  button.append(img);
  button.addEventListener("click", () => {
    const dialog = el("dialog", "zoom-dialog");
    const big = el("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    dialog.append(big);
    dialog.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => dialog.remove());
    document.body.append(dialog);
    dialog.showModal();
  });
  return button;
}

// Words on the left as real text, one picture or a set of swatches on the right.
function splitBlock(block) {
  const wrap = el("div", block.variant ? "spec spec--" + block.variant : "spec");
  const head = el("div", "spec__head");
  head.append(el("span", "label spec__label", block.label));
  if (block.title) head.append(el("h3", "spec__title", block.title));
  if (block.text) head.append(el("p", "body spec__text", block.text));
  const factList = (facts, cls) => {
    const dl = el("dl", cls);
    facts.forEach((f) => {
      const item = el("div", "facts__item");
      item.append(el("dt", "label", f.k), el("dd", "facts__value", f.v));
      dl.append(item);
    });
    return dl;
  };
  if (block.headFacts) head.append(factList(block.headFacts, "facts facts--row"));
  const side = el("div", "spec__side");
  if (block.facts) side.append(factList(block.facts, "facts facts--grid"));
  if (block.stats) {
    const grid = el("div", "stats");
    block.stats.forEach((s) => {
      const card = el("div", "stat");
      card.append(el("strong", "stat__value", s.value), el("span", "stat__text", s.text), el("span", "label stat__source", s.source));
      grid.append(card);
    });
    side.append(grid);
  }
  if (block.rows) {
    const list = el("ol", "rows");
    block.rows.forEach((r) => {
      const li = el("li", "rows__item");
      li.append(el("strong", "rows__title", r.title), el("span", "rows__text", r.text));
      list.append(li);
    });
    side.append(list);
    if (block.note) side.append(el("p", "rows__note", block.note));
  }
  if (block.phases) {
    const grid = el("div", "phases");
    block.phases.forEach((ph) => {
      const col = el("div", "phase");
      col.append(el("span", "label phase__no", ph.no), el("strong", "phase__name", ph.name));
      const ul = el("ul", "chips");
      ph.items.forEach((t) => ul.append(el("li", "chip", t)));
      col.append(ul);
      grid.append(col);
    });
    side.append(grid);
  }
  if (block.changes) {
    const grid = el("div", "changes");
    block.changes.forEach((c) => {
      const card = el("div", "change");
      card.append(el("span", "label change__stage", c.stage), el("span", "change__problem", c.problem), el("strong", "change__fix", c.fix));
      grid.append(card);
    });
    side.append(grid);
  }
  (block.chipGroups || []).forEach((g) => {
    const group = el("div", "chip-group");
    if (g.label) group.append(el("span", "label chip-group__label", g.label));
    const ul = el("ul", g.muted ? "chips chips--muted" : "chips");
    g.items.forEach((t) => ul.append(el("li", "chip", t)));
    group.append(ul);
    side.append(group);
  });
  (block.images || (block.image ? [block.image] : [])).forEach((data) => {
    const fig = el("figure", "spec__figure");
    const img = el("img", "spec__image");
    img.src = data.src;
    img.alt = data.alt;
    img.width = data.width;
    img.height = data.height;
    img.loading = "lazy";
    fig.append(zoomable(img));
    if (data.label) fig.append(el("figcaption", "label spec__cap", data.label));
    side.append(fig);
  });
  if (block.swatches) {
    const bar = el("div", "swatch-bar");
    block.swatches.forEach((s) => {
      const seg = el("span", "swatch-bar__seg");
      seg.style.flexGrow = s.share;
      seg.style.background = s.hex;
      bar.append(seg);
    });
    const grid = el("div", "swatches");
    block.swatches.forEach((s) => {
      const card = el("div", "swatch");
      const top = el("div", "swatch__top");
      const dot = el("span", "swatch__dot");
      dot.style.background = s.hex;
      top.append(dot, el("span", "swatch__name", s.name), el("span", "swatch__hex", s.hex));
      card.append(top, el("strong", "swatch__role", s.role), el("span", "swatch__note", s.note));
      grid.append(card);
    });
    side.append(bar, grid);
    if (block.utility) {
      const row = el("div", "swatch-utility");
      row.append(el("span", "label", "Utility"));
      block.utility.forEach((s) => {
        const item = el("span", "swatch-utility__item");
        const dot = el("span", "swatch__dot");
        dot.style.background = s.hex;
        item.append(dot, document.createTextNode(`${s.name} ${s.hex}`));
        row.append(item);
      });
      side.append(row);
    }
  }
  wrap.append(head, side);
  return wrap;
}

function renderBlock(block, project, sectionIndex) {
  if (block.type === "section") return sectionRule(sectionIndex, block.value);
  if (block.type === "split") return splitBlock(block);
  if (block.type === "compare") {
    const wrap = el("div", "compare");
    wrap.append(el("span", "label spec__label", block.label));
    const grid = el("div", "compare__grid");
    block.items.forEach((item) => {
      const fig = el("figure", "compare__item");
      const img = el("img");
      img.src = item.src;
      img.alt = item.label + ", before and after: " + item.caption;
      img.width = item.width;
      img.height = item.height;
      img.loading = "lazy";
      const cap = el("figcaption", "compare__cap");
      cap.append(el("span", "label", item.label), el("span", "compare__note", item.caption));
      fig.append(zoomable(img), cap);
      grid.append(fig);
    });
    wrap.append(grid);
    return wrap;
  }
  if (block.type === "list") {
    const list = el("ul", "case-list");
    block.items.forEach((item) => list.append(el("li", "body", item)));
    return list;
  }
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
    // Real text and single screens at every width. The board image stays in the data for Behance parity.
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
