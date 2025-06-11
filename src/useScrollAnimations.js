// useScrollAnimations.js
import { useEffect } from 'react';

export default function useScrollAnimations() {
  useEffect(() => {
    const animatedEls = document.querySelectorAll('[class*="animate-slide-"]');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('in-view')) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.15 }
    );
    animatedEls.forEach(el => {
      if (!el.classList.contains('in-view')) {
        el.classList.remove('in-view');
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);
}
