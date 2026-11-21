/**
 * Personal details used across the site: header, hero, about, contact sheet and SEO tags.
 * The site URL lives in astro.config.mjs and is read through `Astro.site`.
 */
export const site = {
  name: 'Vladimir Popovich',
  role: 'Software engineer',
  city: 'Toronto',
  country: 'Canada',
  timeZone: 'America/Toronto',
  languages: ['English', 'Russian'],
  bio: "Software engineer in Toronto, Canada. Currently working on HCMS, the Ontario Ministry of Transportation's highway corridor permitting portal.",
  previously: [
    {
      work: 'Automation for a 10,000-vehicle fleet',
      org: 'WellDone Soft',
      place: 'Moscow, Russia',
    },
    {
      work: 'Pick-to-light warehouse app',
      org: 'IDEAWORKS IIoT Lab',
      place: 'Hamilton, Canada',
    },
  ],
  stack: ['TypeScript', 'React', 'Angular', 'Python', 'FastAPI', '.NET'],
  tools: ['PostgreSQL', 'RAG', 'Azure', 'AWS', 'Docker', 'MCP', 'LLMs', 'CI/CD'],
  email: 'vladimirpopovich06@gmail.com',
  profiles: [
    { label: 'GitHub', handle: 'popovichv', href: 'https://github.com/popovichv' },
    { label: 'LinkedIn', handle: 'in/popovichv', href: 'https://www.linkedin.com/in/popovichv' },
    { label: 'Telegram', handle: '@popovichv', href: 'https://t.me/popovichv' },
  ],
} as const;
