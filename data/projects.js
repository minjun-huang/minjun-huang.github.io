window.PROJECTS = [
  {
    "slug": "greener",
    "title": "Greener",
    "year": 2026,
    "summary": "Small park tasks, done in two to five minutes.",
    "tags": ["Mobile app", "UX research", "UI design"],
    "cover": "assets/greener/cover.webp",
    "blocks": [
      { "type": "image", "value": "assets/greener/board-00-hero.webp", "alt": "Greener home screen with nearby park tasks, next to a map of Latchmere Rec", "width": 1500, "height": 2010 },
      { "type": "caption", "value": "Greener, a graduation project at Kingston University. Below is what I decided and why. The boards show the work itself." },

      { "type": "section", "value": "Overview" },
      { "type": "heading", "value": "Single player first. Everything else got cut." },
      { "type": "text", "value": "Multiplayer tasks were the first thing I deferred. The loop had to work for one person on their own before group features were worth designing at all. Three months, working alone, from interviews through to a tested high fidelity prototype." },
      { "type": "image", "value": "assets/greener/board-01-overview.webp", "alt": "Project overview: solo UX/UI designer, three months, single player scope, and the screens in scope", "width": 1500, "height": 1290 },

      { "type": "section", "value": "The problem" },
      { "type": "heading", "value": "I stopped designing for people who do not care." },
      { "type": "text", "value": "The research kept landing on a gap between wanting to help and actually doing it. I read that as a visibility problem rather than a motivation problem, and that decided what the home screen had to be: a list of specific things to do nearby, sorted by distance. Not a page arguing that parks matter." },
      { "type": "image", "value": "assets/greener/board-02-problem.webp", "alt": "Park value figures, and three barriers from six interviews: no time, no clear role, no reason to start", "width": 1500, "height": 2022 },

      { "type": "section", "value": "Process" },
      { "type": "heading", "value": "Two participants a round, and I tested twice." },
      { "type": "text", "value": "Mid fidelity first, then high fidelity. The rounds were small, so I used them to catch what was plainly broken rather than to prove anything. The task flow changed after the first round. The visual direction did not come out of testing at all. I chose the warm palette because I thought it looked better, and I would rather say that than claim research I did not do." },
      { "type": "image", "value": "assets/greener/board-03-process.webp", "alt": "Think, make, check loops, what each test round changed, and the 2025 screens beside the 2026 redesign", "width": 1500, "height": 3552 },

      { "type": "section", "value": "Key features" },
      { "type": "heading", "value": "Three checks, and you can watch all three happen." },
      { "type": "text", "value": "A photo taken on site, a GPS match, then a manual review before any points land. In the first version the location check ran silently. I split the submit screen into two equal cards, photo and location, so the check nobody knew about became something you could see working. The screen after submitting says pending, not well done, because at that moment the points are not real yet." },
      { "type": "image", "value": "assets/greener/feature-01-onboarding.webp", "alt": "Onboarding in four screens: welcome, find a task, do it and send a photo, collect stamps", "width": 1500, "height": 1268 },
      { "type": "image", "value": "assets/greener/feature-02-home.webp", "alt": "Home with tasks grouped by place, next to the task detail with numbered steps and a route map", "width": 1500, "height": 2064 },
      { "type": "image", "value": "assets/greener/feature-03-submit.webp", "alt": "Submit proof: the button stays off until a photo is added, then becomes active", "width": 1500, "height": 2064 },
      { "type": "image", "value": "assets/greener/feature-04-status.webp", "alt": "After submitting: a status screen with the photo and review timeline, next to the progress dashboard", "width": 1500, "height": 2064 },
      { "type": "image", "value": "assets/greener/feature-05-rewards.webp", "alt": "Dashboard, profile, the rewards shop and an ordered reward", "width": 1500, "height": 1268 },
      { "type": "image", "value": "assets/greener/feature-06-map.webp", "alt": "The map with one pin per place, and a selected pin showing its card", "width": 1500, "height": 2064 },

      { "type": "section", "value": "UI foundations" },
      { "type": "heading", "value": "A small system, because I had to apply it by hand." },
      { "type": "text", "value": "One palette, six type styles, a fixed spacing scale, and no component I could avoid building. Working alone, every extra variant was something I would have to repeat across every screen myself. Two screens break the rules on purpose, and I left them broken because they read better than the consistent version did." },
      { "type": "image", "value": "assets/greener/board-05-foundations.webp", "alt": "App icon, colour palette with a role for each colour, type, and core components", "width": 1500, "height": 4412 }
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
      { type: "image", value: "assets/sitaware/board-01.webp", alt: "SitAware home screen showing 38 minutes of sitting, with the lock screen and rewards behind it", width: 1400, height: 1000 },
      { type: "caption", value: "SitAware, a solo MSc project at Kingston University. The screens shown are a later redesign of the prototype I tested." },

      { type: "section", value: "The problem" },
      { type: "heading", value: "Too quiet gets ignored. Too loud gets switched off." },
      { type: "text", value: "People told me they sit for hours without noticing and only get up when they feel stiff or hungry. The reminder apps I looked at pick one volume and keep it. I designed for the moment instead: stay quiet while someone is working, and get harder to miss only when a break is overdue." },
      { type: "image", value: "assets/sitaware/board-02.webp", alt: "Context: most of us sit for hours without noticing, the NHS guideline, the design goal and three principles", width: 1400, height: 1438 },

      { type: "section", value: "Research" },
      { type: "heading", value: "I tested the prototype, then redesigned it." },
      { type: "text", value: "Three interviews with people aged 26 to 58, then a moderated test with five participants on four core tasks. Everyone finished all four. The screens on this page came after that test, so they have not been tested themselves yet." },
      { type: "image", value: "assets/sitaware/board-03.webp", alt: "Process in five steps: interview, define, hypothesise, make, check", width: 1400, height: 886 },
      { type: "image", value: "assets/sitaware/board-04.webp", alt: "Two interview quotes, research numbers, and what each finding changed in the redesign", width: 1400, height: 1801 },

      { type: "section", value: "Core flow" },
      { type: "heading", value: "Three levels of nudge, one at a time." },
      { type: "text", value: "Home shows how long you have been sitting. A Live Activity counts down on the lock screen. Only when a break is overdue does Strong mode take over the screen, and it asks once more after a snooze. Switching between modes caused hesitation in testing, so the three modes now sit in one control." },
      { type: "image", value: "assets/sitaware/board-06.webp", alt: "Core flow: home, Live Activity, Strong mode, guided stretch and check-in screens", width: 1400, height: 1190 },
      { type: "image", value: "assets/sitaware/board-07.webp", alt: "Today's rhythm chart: sitting and moving blocks across the day, with totals for sitting, moving and breaks", width: 1400, height: 1064 },
      { type: "image", value: "assets/sitaware/board-08.webp", alt: "Plan and AI coach screens: today as a timeline with one suggestion at a time", width: 1400, height: 816 },

      { type: "section", value: "Rewards" },
      { type: "heading", value: "Streaks lead. Points stay in the background." },
      { type: "text", value: "Reactions to points were mixed: some people liked them, others did not care. So the streak and badges come first and points live in a separate shop. A missed day shows in the seven-day streak without wiping it." },
      { type: "image", value: "assets/sitaware/board-09.webp", alt: "Rewards: streak and badges screen next to the points shop", width: 1400, height: 816 },

      { type: "section", value: "Design system" },
      { type: "heading", value: "Dark mode came from variables, not a second set of screens." },
      { type: "text", value: "Every colour is a Figma variable with a light and a dark value, so the dark theme is the same screens in a different mode. Larger text and high contrast are one tap away in Settings, which participants asked for." },
      { type: "image", value: "assets/sitaware/board-05.webp", alt: "Design system: light and dark colour tokens, Nunito type scale, components, spacing and radius", width: 1400, height: 1970 },
      { type: "image", value: "assets/sitaware/board-10.webp", alt: "The same home screen in light mode and in the dark high contrast mode", width: 1400, height: 816 },

      { type: "section", value: "Next" },
      { type: "heading", value: "What I would test next." },
      { type: "text", value: "Whether Strong mode helps people or just stresses them, and whether streaks still matter once the first week is over." },
      { type: "image", value: "assets/sitaware/board-11.webp", alt: "Three things to test next: Strong mode, snooze versus start, and life after week one", width: 1400, height: 972 }
    ]
  }
]
;
