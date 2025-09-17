document.addEventListener('DOMContentLoaded', () => {
  // --- Animate Section Titles on Scroll ---
  const sectionTitles = document.querySelectorAll('.section h1, .section h2'); // Updated to include h1

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is visible
  });

  sectionTitles.forEach(title => {
    observer.observe(title);
  });
});