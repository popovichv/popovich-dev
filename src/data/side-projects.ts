import type { ImageMetadata } from 'astro';
import devfestKiosk from '../assets/devfest-badge-kiosk.webp';
import greengroveBilling from '../assets/greengrove.webp';
import expenseBot from '../assets/telegram-expense-tracker.webp';
import autoControl from '../assets/autocontrol.webp';
import fruitlandGame from '../assets/fruitland-diagnostic.webp';
import popovichDev from '../assets/popovich-dev.webp';
import spamClassifier from '../assets/spam-email-classifier.webp';

interface LineItem {
  label: string;
  qty: string;
}

interface Figure {
  caption: string;
  /** A wireframe drawn in place of the screenshot until there is one. */
  sketch: 'web' | 'chat';
  image?: { src: ImageMetadata; alt: string };
}

export interface SideProject {
  name: string;
  /** Paid is contract work for a client, mine is a personal project. */
  kind: 'paid' | 'mine';
  billedTo: string;
  date: string;
  /** Public GitHub link; without one the receipt says the repo is private. */
  repo?: string;
  figure?: Figure;
  items: LineItem[];
  /** The result, in one line. */
  total: string;
}

/** Ongoing practice rather than a project: a smaller receipt under the intro. */
export const leetcode: SideProject = {
  name: 'LeetCode',
  kind: 'mine',
  billedTo: 'Myself',
  date: '2026',
  repo: 'https://github.com/popovichv/leetcode-solutions',
  items: [
    { label: 'Solutions in Python', qty: '✓' },
    { label: 'Written explanations', qty: '✓' },
    { label: 'Time, space complexity', qty: '✓' },
    { label: 'Generated README table', qty: '✓' },
  ],
  total: 'Always in progress',
};

/** Side projects as receipts, newest first. The first one gets the highest number. */
export const sideProjects: SideProject[] = [
  {
    name: 'popovich.dev',
    kind: 'mine',
    billedTo: 'Myself',
    date: '2026',
    repo: 'https://github.com/popovichv/popovich-dev',
    figure: {
      caption: '[web] Landing',
      sketch: 'web',
      image: {
        src: popovichDev,
        alt: 'This site’s landing page: rows of scrolling type with a photo between the first and last name',
      },
    },
    items: [
      { label: 'Astro, static build', qty: '1' },
      { label: 'Scroll-driven pinboard', qty: '✓' },
      { label: 'Kinetic type hero', qty: '✓' },
      { label: 'CI: lint, check, build', qty: '✓' },
    ],
    total: 'You are here',
  },
  {
    name: 'AutoControl',
    kind: 'paid',
    billedTo: 'WellDone Soft',
    date: '2026',
    figure: {
      caption: '[app] Android redesign',
      sketch: 'web',
      image: {
        src: autoControl,
        alt: 'Three Android screens: sign-in, the list of transport requests and the new-request form',
      },
    },
    items: [
      { label: 'Web + Android redesign', qty: '✓' },
      { label: 'Android app, Compose', qty: 'now' },
      { label: 'Sign-in, forced update', qty: '✓' },
      { label: 'Web client', qty: 'next' },
    ],
    total: 'Android in progress',
  },
  {
    name: 'DevFest\nBadge Kiosk',
    kind: 'mine',
    billedTo: 'DevFest Toronto',
    date: '2026',
    repo: 'https://github.com/popovichv/devfest-badge-kiosk',
    figure: {
      caption: '[web] Check-in kiosk',
      sketch: 'web',
      image: {
        src: devfestKiosk,
        alt: 'Check-in kiosk with a QR ticket scanner on the left and the printed badge label on the right',
      },
    },
    items: [
      { label: 'QR ticket scanner', qty: '1' },
      { label: 'Student ID check, Gemini', qty: '✓' },
      { label: 'Thermal badge printing', qty: '✓' },
      { label: 'Built from scratch', qty: '15 min' },
    ],
    total: 'Demoed live',
  },
  {
    name: 'Telegram\nExpense Tracker',
    kind: 'mine',
    billedTo: 'Myself',
    date: '2026',
    repo: 'https://github.com/popovichv/tg-expense-tracker-bot',
    figure: {
      caption: '[bot] Telegram chat',
      sketch: 'chat',
      image: {
        src: expenseBot,
        alt: 'Telegram chat where the message "15 Pizza" is recorded as a $15 takeout expense',
      },
    },
    items: [
      { label: 'Telegram bot, Python', qty: '1' },
      { label: 'One-line quick add', qty: '✓' },
      { label: 'Monthly spending view', qty: '✓' },
      { label: 'Postgres, Alembic', qty: '✓' },
    ],
    total: 'Tracks my spending',
  },
  {
    name: 'Greengrove',
    kind: 'paid',
    billedTo: 'Cottage settlement',
    date: '2026',
    figure: {
      caption: '[web] Charges and payments',
      sketch: 'web',
      image: {
        src: greengroveBilling,
        alt: 'Resident portal billing page for water, with the charges and a bank payment for the period',
      },
    },
    items: [
      { label: 'Resident portal, Angular', qty: '1' },
      { label: 'ASP.NET Core 10 API', qty: '1' },
      { label: '1C billing, meters', qty: '✓' },
      { label: 'Payment gateway', qty: 'now' },
    ],
    total: 'Built, not live yet',
  },
  {
    name: 'Fruitland\nEscape Room',
    kind: 'paid',
    billedTo: 'Fruitland Mfg.',
    date: '2026',
    figure: {
      caption: '[web] Diagnostic room',
      sketch: 'web',
      image: {
        src: fruitlandGame,
        alt: 'Escape room game: a flashlight shines into the open pump housing and the status line reports water inside',
      },
    },
    items: [
      { label: 'Browser game, 4 rooms', qty: '1' },
      { label: 'Toolbox puzzles', qty: '8 tools' },
      { label: 'Hints across rooms', qty: '3' },
      { label: 'Vanilla JS, no build', qty: '✓' },
    ],
    total: 'Delivered',
  },
  {
    name: 'Spam Email\nClassifier',
    kind: 'mine',
    billedTo: 'Myself',
    date: '2025',
    repo: 'https://github.com/popovichv/spam-email-classifier',
    figure: {
      caption: '[ml] Dataset notebook',
      sketch: 'web',
      image: {
        src: spamClassifier,
        alt: 'Jupyter notebook cell showing the 5,728-email dataset with its text and spam columns',
      },
    },
    items: [
      { label: 'TF-IDF, uni + bigrams', qty: '✓' },
      { label: 'Naive Bayes, sklearn', qty: '1' },
      { label: 'Precision', qty: '98.9%' },
      { label: 'Recall', qty: '93.8%' },
    ],
    total: 'F1 score 0.96',
  },
];
