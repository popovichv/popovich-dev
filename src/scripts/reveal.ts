// Blocks marked data-reveal="waiting" are shown once they scroll into view.
// Blocks that arrive together still play in order, 300ms apart.
const gap = 300;
let nextStart = 0;

const observer = new IntersectionObserver(
  (entries) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      observer.unobserve(target);

      const start = Math.max(performance.now(), nextStart);
      nextStart = start + gap;
      setTimeout(() => target.setAttribute('data-reveal', 'shown'), start - performance.now());
    }
  },
  { rootMargin: '0px 0px -20% 0px' },
);

document.querySelectorAll('[data-reveal]').forEach((block) => observer.observe(block));
