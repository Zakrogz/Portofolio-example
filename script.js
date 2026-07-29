// Simple scroll-reveal: fade/slide up sections as they enter the viewport.
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".reel, .service, .process-step, .testimonial, .why-card, .stat"
  );

  targets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));

  // Respect reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  // FAQ accordion — only one answer open at a time
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      faqItems.forEach((other) => other.classList.remove("open"));

      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
});
