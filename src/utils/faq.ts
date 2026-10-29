import { CONTACT_EMAIL, stats } from './links';

export const faq = [
  {
    question: 'Can I choose exactly what gets hidden?',
    answer: `Yes. Every element has its own switch — ${stats.switches} in total. Turn on only the ones you need: hide Shorts but keep comments, blur thumbnails but keep the home feed. Your choices are saved and applied every time you open YouTube.`,
  },
  {
    question: 'Does it collect any data?',
    answer:
      'No. Clean YouTube has no analytics, no accounts and no servers to send anything to. It only asks for permission to store your settings and to run on youtube.com, where it hides elements on the page.',
  },
  {
    question: 'Which languages are supported?',
    answer:
      'English, German, Spanish, Portuguese, Russian, Japanese and Chinese (Simplified). The extension follows the language of your browser.',
  },
  {
    question: 'Can I request a feature?',
    answer: `Of course. Write to ${CONTACT_EMAIL} or use the support tab on the Chrome Web Store page — most of the current switches started as user requests.`,
  },
];
