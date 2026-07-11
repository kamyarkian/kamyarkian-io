// src/data/projects.ts

import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "toronto-shelter-audit",
    slug: "toronto-shelter-audit",
    title: "Toronto Shelter Capacity Audit",
    description:
      "A quantitative analysis of Toronto’s shelter system using Python and Open Data, surfacing critical saturation points across wards and time windows.",
    tech: ["Python", "Pandas", "Matplotlib", "Open Data API", "Civic Tech"],
    link: "https://github.com/kian-lavi/toronto-shelter-audit",
    github: "https://github.com/kian-lavi",
    category: "Civic Analytics",
    stats: [
      { label: "Data Points", value: "50k+" },
      { label: "Focus", value: "Social Impact" },
    ],
  },
  {
    id: "cognitive-state-agent",
    slug: "cognitive-state-agent",
    title: "Cognitive State Agent (LangGraph)",
    description:
      "An agentic AI system that maintains cognitive state across steps using LangGraph, designed for human-centered collaboration instead of one-off chat responses.",
    tech: ["LangGraph", "Python", "LLM Engineering", "State Management", "System Design"],
    link: "https://medium.com/@kian-lavi/stop-building-chatbots-start-building-teammates-a-human-centered-blueprint-for-agentic-ai-d7a02a977a7d",
    github: "https://github.com/kian-lavi",
    category: "Agentic AI",
    stats: [
      { label: "Architecture", value: "Stateful" },
      { label: "Domain", value: "Agentic AI" },
    ],
  },
  {
    id: "eco-market-predictor",
    slug: "eco-market-predictor",
    title: "Wildfire Economic Predictor",
    description:
      "A predictive model that connects climate risk signals with real-estate and market behaviour, exploring economic empathy in climate algorithms.",
    tech: ["Python", "Scikit-learn", "Predictive Modeling", "Financial Data Analysis"],
    link: "https://medium.com/@kian-lavi/the-price-of-smoke-why-climate-algorithms-need-economic-empathy-fed33502fbb9",
    github: "https://github.com/kian-lavi",
    category: "Climate & Markets",
    stats: [
      { label: "Model", value: "Regression" },
      { label: "Innovation", value: "Cross-Domain" },
    ],
  },
];
