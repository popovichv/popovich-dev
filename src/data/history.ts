interface Commit {
  hash: string;
  type: string;
  scope?: string;
  message: string;
  date: string;
  tag?: string;
  /** An open side branch, drawn forking off the commit below it. */
  branch?: string;
}

/** My career as `git log main`, newest first. The first commit is HEAD. */
export const history: Commit[] = [
  {
    hash: 'e91f2ac',
    type: 'release',
    message: 'software developer, Ontario Public Service',
    date: '2026',
    tag: 'v3.0',
  },
  {
    hash: 'c3a7d10',
    type: 'feat',
    scope: 'hcms',
    message: "ship features on MTO's highway corridor permitting portal",
    date: '2026',
  },
  {
    hash: '51ad0e3',
    type: 'feat',
    scope: 'autocontrol',
    message: 'rebuild the fleet management Android app from scratch',
    date: '2026',
    branch: 'contract/welldone-soft',
  },
  {
    hash: '2088c4f',
    type: 'release',
    message: 'frontend developer, IDEAWORKS IIoT Lab, Mohawk College',
    date: '2025-05',
    tag: 'v2.0',
  },
  {
    hash: 'b13e4a0',
    type: 'feat',
    scope: 'pick-to-light',
    message: 'architect a React app for an industry partner, lead a team of 2',
    date: '2025',
  },
  {
    hash: '1f8d3e7',
    type: 'release',
    message: 'software engineer, WellDone Soft, Moscow',
    date: '2024-05',
    tag: 'v1.0',
  },
  {
    hash: '9a41c0e',
    type: 'perf',
    scope: 'autocontrol-bot',
    message: 'cut stalled-request response time from days to hours',
    date: '2024',
  },
  {
    hash: '8aa9fd2',
    type: 'init',
    message: 'software engineering intern, Flask + PostgreSQL for a 10k-vehicle fleet',
    date: '2023-09',
    tag: 'v0.1',
  },
];
