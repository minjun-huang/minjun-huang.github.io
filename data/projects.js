window.PROJECTS = [
  {
    "slug": "greener",
    "title": "Greener",
    "year": 2026,
    "summary": "Small park tasks, done in two to five minutes.",
    "tags": ["Mobile app", "UX research", "UI design"],
    "cover": "assets/greener/cover.webp",
    "blocks": [
      { "type": "image", "value": "assets/greener/board-00-hero.webp" },
      { "type": "caption", "value": "Greener, a graduation project at Kingston University. Below is what I decided and why. The boards show the work itself." },

      { "type": "section", "value": "Overview" },
      { "type": "heading", "value": "Single player first. Everything else got cut." },
      { "type": "text", "value": "Multiplayer tasks were the first thing I deferred. The loop had to work for one person on their own before group features were worth designing at all. Three months, working alone, from interviews through to a tested high fidelity prototype." },
      { "type": "image", "value": "assets/greener/board-01-overview.webp" },

      { "type": "section", "value": "The problem" },
      { "type": "heading", "value": "I stopped designing for people who do not care." },
      { "type": "text", "value": "The research kept landing on a gap between wanting to help and actually doing it. I read that as a visibility problem rather than a motivation problem, and that decided what the home screen had to be: a list of specific things to do nearby, sorted by distance. Not a page arguing that parks matter." },
      { "type": "image", "value": "assets/greener/board-02-problem.webp" },

      { "type": "section", "value": "Process" },
      { "type": "heading", "value": "Two participants a round, and I tested twice." },
      { "type": "text", "value": "Mid fidelity first, then high fidelity. The rounds were small, so I used them to catch what was plainly broken rather than to prove anything. The task flow changed after the first round. The visual direction did not come out of testing at all. I chose the warm palette because I thought it looked better, and I would rather say that than claim research I did not do." },
      { "type": "image", "value": "assets/greener/board-03-process.webp" },

      { "type": "section", "value": "Key features" },
      { "type": "heading", "value": "Three checks, and you can watch all three happen." },
      { "type": "text", "value": "A photo taken on site, a GPS match, then a manual review before any points land. In the first version the location check ran silently. I split the submit screen into two equal cards, photo and location, so the check nobody knew about became something you could see working. The screen after submitting says pending, not well done, because at that moment the points are not real yet." },
      { "type": "image", "value": "assets/greener/board-04-features.webp" },

      { "type": "section", "value": "UI foundations" },
      { "type": "heading", "value": "A small system, because I had to apply it by hand." },
      { "type": "text", "value": "One palette, six type styles, a fixed spacing scale, and no component I could avoid building. Working alone, every extra variant was something I would have to repeat across every screen myself. Two screens break the rules on purpose, and I left them broken because they read better than the consistent version did." },
      { "type": "image", "value": "assets/greener/board-05-foundations.webp" }
    ]
  },
  {
    slug: "sitaware",
    title: "SitAware",
    year: 2025,
    summary: "Break reminders that only get louder when you ignore them.",
    tags: ["Mobile app", "UX research", "UI design"],
    cover: "assets/sitaware/cover.webp",
    blocks: [
      { type: "image", value: "assets/sitaware/board-01.webp" },
      { type: "caption", value: "SitAware, a solo MSc project at Kingston University. The screens shown are a later redesign of the prototype I tested." },

      { type: "section", value: "The problem" },
      { type: "heading", value: "Too quiet gets ignored. Too loud gets switched off." },
      { type: "text", value: "People told me they sit for hours without noticing and only get up when they feel stiff or hungry. The reminder apps I looked at pick one volume and keep it. I designed for the moment instead: stay quiet while someone is working, and get harder to miss only when a break is overdue." },
      { type: "image", value: "assets/sitaware/board-02.webp" },

      { type: "section", value: "Research" },
      { type: "heading", value: "I tested the prototype, then redesigned it." },
      { type: "text", value: "Three interviews with people aged 26 to 58, then a moderated test with five participants on four core tasks. Everyone finished all four. The screens on this page came after that test, so they have not been tested themselves yet." },
      { type: "image", value: "assets/sitaware/board-03.webp" },
      { type: "image", value: "assets/sitaware/board-04.webp" },

      { type: "section", value: "Core flow" },
      { type: "heading", value: "Three levels of nudge, one at a time." },
      { type: "text", value: "Home shows how long you have been sitting. A Live Activity counts down on the lock screen. Only when a break is overdue does Strong mode take over the screen, and it asks once more after a snooze. Switching between modes caused hesitation in testing, so the three modes now sit in one control." },
      { type: "image", value: "assets/sitaware/board-06.webp" },
      { type: "image", value: "assets/sitaware/board-07.webp" },
      { type: "image", value: "assets/sitaware/board-08.webp" },

      { type: "section", value: "Rewards" },
      { type: "heading", value: "Streaks lead. Points stay in the background." },
      { type: "text", value: "Reactions to points were mixed: some people liked them, others did not care. So the streak and badges come first and points live in a separate shop. A missed day shows in the seven-day streak without wiping it." },
      { type: "image", value: "assets/sitaware/board-09.webp" },

      { type: "section", value: "Design system" },
      { type: "heading", value: "Dark mode came from variables, not a second set of screens." },
      { type: "text", value: "Every colour is a Figma variable with a light and a dark value, so the dark theme is the same screens in a different mode. Larger text and high contrast are one tap away in Settings, which participants asked for." },
      { type: "image", value: "assets/sitaware/board-05.webp" },
      { type: "image", value: "assets/sitaware/board-10.webp" },

      { type: "section", value: "Next" },
      { type: "heading", value: "What I would test next." },
      { type: "text", value: "Whether Strong mode helps people or just stresses them, and whether streaks still matter once the first week is over." },
      { type: "image", value: "assets/sitaware/board-11.webp" }
    ]
  }
]
;
