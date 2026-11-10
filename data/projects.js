window.PROJECTS = [
  {
    "slug": "greener",
    "title": "Greener",
    "year": 2026,
    "summary": "Small park tasks, done in two to five minutes.",
    "tags": ["Mobile app", "UX research", "UI design"],
    "cover": "assets/greener/cover.webp?v=2",
    "blocks": [
      { "type": "image", "value": "assets/greener/board-00-hero.webp?v=2", "alt": "Greener home screen with nearby park tasks, next to a map of Latchmere Rec", "width": 1500, "height": 2010 },
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
      { "type": "image", "value": "assets/greener/feature-01-onboarding.webp", "alt": "Onboarding in four screens: welcome, find a task, do it and send a photo, collect stamps", "width": 1500, "height": 1268, "mobile": {"no": "01", "title": "Four screens, then sign in", "text": "Testing cut onboarding from five screens to four. Each one shows a single step of the loop.", "shots": [{"src": "assets/greener/screen-01-onboarding-1.webp", "label": "welcome", "caption": "", "width": 294, "height": 637}, {"src": "assets/greener/screen-01-onboarding-2.webp", "label": "find", "caption": "", "width": 294, "height": 637}, {"src": "assets/greener/screen-01-onboarding-3.webp", "label": "do it", "caption": "", "width": 294, "height": 637}, {"src": "assets/greener/screen-01-onboarding-4.webp", "label": "collect", "caption": "", "width": 294, "height": 637}]} },
      { "type": "image", "value": "assets/greener/feature-02-home.webp", "alt": "Home with tasks grouped by place, next to the task detail with numbered steps and a route map", "width": 1500, "height": 2064, "mobile": {"no": "02", "title": "Nearby tasks, ready to start", "text": "Tasks are grouped by place: you pick where to go first, then what to do there.", "shots": [{"src": "assets/greener/screen-02-home-1.webp", "label": "home", "caption": "The reward bar sits above the list, so the next goal stays in view.", "width": 588, "height": 1275}, {"src": "assets/greener/screen-02-home-2.webp", "label": "task detail", "caption": "Steps are written for each task. The map shows the route in step 2.", "width": 588, "height": 1275}]} },
      { "type": "image", "value": "assets/greener/feature-03-submit.webp", "alt": "Submit proof: the button stays off until a photo is added, then becomes active", "width": 1500, "height": 2064, "mobile": {"no": "03", "title": "No photo, no submit", "text": "Points need proof, so the button stays off until a photo is added.", "shots": [{"src": "assets/greener/screen-03-submit-1.webp", "label": "no photo yet", "caption": "The button says what is missing instead of just greying out.", "width": 588, "height": 1275}, {"src": "assets/greener/screen-03-submit-2.webp", "label": "photo added", "caption": "Location is confirmed automatically. Only the photo needs a tap.", "width": 588, "height": 1275}]} },
      { "type": "image", "value": "assets/greener/feature-04-status.webp", "alt": "After submitting: a status screen with the photo and review timeline, next to the progress dashboard", "width": 1500, "height": 2064, "mobile": {"no": "04", "title": "Points arrive after review", "text": "Points wait for review to stop fake submissions. This screen sets that expectation instead of celebrating.", "shots": [{"src": "assets/greener/screen-04-status-1.webp", "label": "submitted", "caption": "Your own photo leads the page. The timeline shows when points arrive.", "width": 588, "height": 1275}, {"src": "assets/greener/screen-04-status-2.webp", "label": "dashboard", "caption": "Impact by task type shows what your points did, not just how many.", "width": 588, "height": 1275}]} },
      { "type": "image", "value": "assets/greener/feature-05-rewards.webp", "alt": "Dashboard, profile, the rewards shop and an ordered reward", "width": 1500, "height": 1268, "mobile": {"no": "05", "title": "Points become real things", "text": "Eco goods are delivered to your home, so points have a use outside the app.", "shots": [{"src": "assets/greener/screen-05-rewards-1.webp", "label": "dashboard", "caption": "", "width": 294, "height": 637}, {"src": "assets/greener/screen-05-rewards-2.webp", "label": "profile", "caption": "", "width": 294, "height": 637}, {"src": "assets/greener/screen-05-rewards-3.webp", "label": "rewards", "caption": "", "width": 294, "height": 637}, {"src": "assets/greener/screen-05-rewards-4.webp", "label": "ordered", "caption": "", "width": 294, "height": 637}]} },
      { "type": "image", "value": "assets/greener/feature-06-map.webp", "alt": "The map with one pin per place, and a selected pin showing its card", "width": 1500, "height": 2064, "mobile": {"no": "06", "title": "Find a green space, one pin at a time", "text": "One pin per place, not per task, so the map stays readable when a park has several tasks.", "shots": [{"src": "assets/greener/screen-06-map-1.webp", "label": "default", "caption": "Green: every task done. Grey: tasks left.", "width": 588, "height": 1272}, {"src": "assets/greener/screen-06-map-2.webp", "label": "pin selected", "caption": "Tap the map to close the card.", "width": 588, "height": 1272}]} },

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
    cover: "assets/sitaware/cover.webp?v=4",
    blocks: [
      { type: "image", value: "assets/sitaware/board-01.webp?v=3", alt: "SitAware home screen showing 38 minutes of sitting, with the lock screen and rewards behind it", width: 1400, height: 1000 },
      { type: "caption", value: "SitAware, a solo MSc project at Kingston University. The screens shown are a later redesign of the prototype I tested." },

      { type: "section", value: "The problem" },
      { type: "heading", value: "Too quiet gets ignored. Too loud gets switched off." },
      { type: "text", value: "People told me they sit for hours without noticing and only get up when they feel stiff or hungry. The reminder apps I looked at pick one volume and keep it. I designed for the moment instead: stay quiet while someone is working, and get harder to miss only when a break is overdue." },
      { type: "image", value: "assets/sitaware/board-02.webp?v=3", alt: "Context: most of us sit for hours without noticing, the NHS guideline, the design goal and three principles", width: 1400, height: 1456 },

      { type: "section", value: "Research" },
      { type: "heading", value: "I tested the prototype, then redesigned it." },
      { type: "text", value: "Three interviews with people aged 26 to 58, then a moderated test with five participants on four core tasks. Everyone finished all four. The screens on this page came after that test, so they have not been tested themselves yet." },
      { type: "image", value: "assets/sitaware/board-03.webp?v=3", alt: "Process in five steps: interview, define, hypothesise, make, check", width: 1400, height: 904 },
      { type: "image", value: "assets/sitaware/board-04.webp?v=3", alt: "Two interview quotes, research numbers, and what each finding changed in the redesign", width: 1400, height: 1819 },

      { type: "section", value: "Core flow" },
      { type: "heading", value: "Three levels of nudge, one at a time." },
      { type: "text", value: "Home shows how long you have been sitting. A Live Activity counts down on the lock screen. Only when a break is overdue does Strong mode take over the screen, and it asks once more after a snooze. Switching between modes caused hesitation in testing, so the three modes now sit in one control." },
      { type: "image", value: "assets/sitaware/board-06.webp?v=3", alt: "Core flow: home, Live Activity, Strong mode, guided stretch and check-in screens", width: 1400, height: 1090 },
      { type: "image", value: "assets/sitaware/board-07.webp?v=3", alt: "Today's rhythm chart: sitting and moving blocks across the day, with totals for sitting, moving and breaks", width: 1400, height: 975 },
      { type: "image", value: "assets/sitaware/board-08.webp?v=3", alt: "Plan and AI coach screens: today as a timeline with one suggestion at a time", width: 1400, height: 1064 },

      { type: "section", value: "Rewards" },
      { type: "heading", value: "Streaks lead. Points stay in the background." },
      { type: "text", value: "Reactions to points were mixed: some people liked them, others did not care. So the streak and badges come first and points live in a separate shop. A missed day shows in the seven-day streak without wiping it." },
      { type: "image", value: "assets/sitaware/board-09.webp?v=3", alt: "Rewards: streak and badges screen next to the points shop", width: 1400, height: 1064 },

      { type: "section", value: "Design system" },
      { type: "heading", value: "Dark mode came from variables, not a second set of screens." },
      { type: "text", value: "Every colour is a Figma variable with a light and a dark value, so the dark theme is the same screens in a different mode. Larger text and high contrast are one tap away in Settings, which participants asked for." },
      { type: "image", value: "assets/sitaware/board-05.webp?v=3", alt: "Design system: light and dark colour tokens, Geist type scale, components, spacing and radius", width: 1400, height: 1954 },
      { type: "image", value: "assets/sitaware/board-10.webp?v=3", alt: "The same home screen in light mode and in the dark high contrast mode", width: 1400, height: 901 },

      { type: "section", value: "Next" },
      { type: "heading", value: "What I would test next." },
      { type: "text", value: "Whether Strong mode helps people or just stresses them, and whether streaks still matter once the first week is over." },
      { type: "image", value: "assets/sitaware/board-11.webp?v=3", alt: "Three things to test next: Strong mode, snooze versus start, and life after week one", width: 1400, height: 1016 }
    ]
  }
]
;
