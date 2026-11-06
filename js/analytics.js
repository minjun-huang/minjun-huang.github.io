// Google Analytics 4 with consent first.
// Nothing loads and no cookie is set until the visitor clicks "Accept".
// Visit any page with ?internal=1 once to stop counting your own visits on that browser.
(function () {
  const GA_ID = "G-0ZMHJHX6SR";
  const KEY = "mj-analytics-consent";
  const INTERNAL = "mj-internal";

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  if (new URLSearchParams(location.search).get("internal") === "1") store.set(INTERNAL, "1");
  if (store.get(INTERNAL) === "1") return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  let loaded = false;
  function load() {
    if (loaded) return;
    loaded = true;
    gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID);
    track();
  }

  function send(name, params) {
    if (loaded) gtag("event", name, params);
  }

  function track() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page = location.pathname.split("/").pop() || "index.html";
      if (a.classList.contains("project-row")) {
        const slug = new URL(a.href).searchParams.get("slug");
        send("select_project", { project: slug, from_page: page });
      } else if (href.endsWith("cv.pdf")) {
        send("cv_download", { link_place: a.closest(".footer") ? "footer" : a.closest(".nav") ? "nav" : "page", from_page: page });
      } else if (href.startsWith("mailto:")) {
        send("contact_click", { method: "email", from_page: page });
      } else if (href.includes("linkedin.com")) {
        send("contact_click", { method: "linkedin", from_page: page });
      } else if (href.includes("behance.net")) {
        send("contact_click", { method: "behance", from_page: page });
      }
    });

    // Which case study sections people actually reach
    const slug = new URLSearchParams(location.search).get("slug");
    const caseRoot = document.querySelector("[data-case]");
    if (!caseRoot || !slug || !("IntersectionObserver" in window)) return;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const label = entry.target.querySelector("span");
        const section = label ? label.textContent.replace(/^\d+\s*\/\s*/, "").trim() : "";
        if (!section || seen.has(section)) return;
        seen.add(section);
        io.unobserve(entry.target);
        send("case_section_view", { project: slug, section, section_index: seen.size });
      });
    }, { threshold: 0.6 });
    const watch = () => caseRoot.querySelectorAll(".section-rule").forEach((el) => io.observe(el));
    watch();
    new MutationObserver(watch).observe(caseRoot, { childList: true, subtree: true });
  }

  function banner() {
    const bar = document.createElement("div");
    bar.className = "consent";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Analytics choice");
    bar.innerHTML =
      '<p class="consent__text">I use Google Analytics to see which projects people read, so I can improve this site. No ads.</p>' +
      '<div class="consent__actions">' +
      '<button type="button" class="consent__btn consent__btn--yes">Accept</button>' +
      '<button type="button" class="consent__btn">Decline</button>' +
      "</div>";
    document.body.appendChild(bar);
    const close = (choice) => {
      store.set(KEY, choice);
      bar.remove();
      if (choice === "granted") load();
    };
    bar.querySelector(".consent__btn--yes").addEventListener("click", () => close("granted"));
    bar.querySelector(".consent__btn:not(.consent__btn--yes)").addEventListener("click", () => close("denied"));
  }

  const choice = store.get(KEY);
  if (choice === "granted") load();
  else if (choice !== "denied") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", banner);
    else banner();
  }
})();
