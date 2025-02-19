document.addEventListener("DOMContentLoaded", function () {
  // Typewriter Effect
  const words = ["AI/ML Enthusiast", "Web Developer", "Software Engineer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    const currentText = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause before erasing
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500); // Pause before typing next word
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }
  typeEffect();

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Fade-in Animation on Scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".fade-in")
    .forEach((section) => observer.observe(section));
});
