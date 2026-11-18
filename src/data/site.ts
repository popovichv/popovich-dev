/**
 * Personal details used across the site: header, hero, intro and SEO tags.
 * The site URL lives in astro.config.mjs and is read through `Astro.site`.
 */
export const site = {
  name: 'Vladimir Popovich',
  role: 'Software engineer',
  city: 'Toronto',
  region: 'Ontario',
  country: 'CA',
  bio: "Software engineer in Toronto, Ontario. Right now I build HCMS, the Ontario Ministry of Transportation's highway corridor permitting portal.",
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
} as const;
