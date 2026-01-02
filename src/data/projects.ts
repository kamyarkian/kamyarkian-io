import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'toronto-shelter-audit',
    title: 'Toronto Shelter Capacity Audit',
    description: 'A quantitative analysis of Toronto’s shelter system using Python & Open Data. This audit revealed critical saturation points in specific sectors (e.g., Women & Youth services hitting 99% capacity) and visualized systemic gaps to support data-driven policy advocacy.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Open Data API', 'Civic Tech'],
    link: 'https://github.com/kamyarkian', // Update if you have a specific repo
    github: 'https://github.com/kamyarkian',
    stats: [
      { label: 'Data Points', value: '50k+' },
      { label: 'Focus', value: 'Social Impact' },
    ],
  },
  {
    id: 'cognitive-state-agent',
    title: 'Cognitive State Agent (LangGraph)',
    description: 'An advanced Agentic AI architecture moving beyond stateless RAG. Built with LangGraph, this system maintains "Cognitive State" to handle multi-turn reasoning and crisis management, simulating a proactive teammate rather than a reactive chatbot.',
    tech: ['LangGraph', 'Python', 'LLM Engineering', 'State Management', 'System Design'],
    link: 'https://medium.com/@kamyarkian/stop-building-chatbots-start-building-teammates-a-human-centered-blueprint-for-agentic-ai-d7a02a977a7d',
    github: 'https://github.com/kamyarkian',
    stats: [
      { label: 'Architecture', value: 'Stateful' },
      { label: 'Domain', value: 'Agentic AI' },
    ],
  },
  {
    id: 'eco-market-predictor',
    title: 'Wildfire Economic Predictor',
    description: 'A novel predictive model exploring "Economic Empathy" in climate algorithms. This project analyzes real-estate market fluctuations as leading indicators for forest fire risks, bridging the gap between financial data and environmental safety.',
    tech: ['Scikit-Learn', 'Predictive Modeling', 'Financial Data Analysis', 'Python'],
    link: 'https://medium.com/@kamyarkian/the-price-of-smoke-why-climate-algorithms-need-economic-empathy-fed33502fbb9',
    github: 'https://github.com/kamyarkian',
    stats: [
      { label: 'Model', value: 'Regression' },
      { label: 'Innovation', value: 'Cross-Domain' },
    ],
  },
];
