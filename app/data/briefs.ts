export type Brief = {
  id: string;
  title: string;
  whenWhere: string;
  focus: string;
  href: string;
  cta: string;
};

export const briefs: Brief[] = [
  {
    id: "precision",
    title: "Precision Beats Volume",
    whenWhere:
      "International Battery Seminar & Expo (IBSE), Orlando – April 2026",
    focus:
      "Application-specific precision in battery manufacturing. Why scale alone isn't sufficient for commercialisation.",
    href: "mailto:james@monkscroft.com?subject=Re%3A%20Precision%20Beats%20Volume",
    cta: "Request the brief",
  },
  {
    id: "great-battery",
    title: "Great Battery Solution. Wrong Problem?",
    whenWhere: "Volta Foundation – Battery Forum, Online – May 2026",
    focus:
      "Most battery roadmaps look the same. Higher energy density, better performance, lower cost. Are we solving the right problems in the first place?",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7459232370458701825/",
    cta: "Read the brief",
  },
  {
    id: "sodium-ion",
    title: "Sodium Ion: Who could benefit?",
    whenWhere: "Global Market Engagement, Q1 2026",
    focus: "Market insights from multi-sector engagement.",
    href: "mailto:james@monkscroft.com?subject=Re%3A%20Sodium%20Ion%3A%20Who%20could%20benefit%3F",
    cta: "Request the brief",
  },
  {
    id: "sovereignty",
    title: "Sovereignty / NATO Compliance in the Battery Supply Chain",
    whenWhere:
      "European & North American End User Engagements, Q4 2025 – Ongoing",
    focus:
      "How and when will this be accomplished? Is this a realistic demand?",
    href: "mailto:james@monkscroft.com?subject=Re%3A%20Sovereignty%20%2F%20NATO%20Compliance%20in%20the%20Battery%20Supply%20Chain",
    cta: "Request the brief",
  },
];
