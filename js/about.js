// Smooth Scroll Effect
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Floating Particles Animation
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    document.querySelector(".floating-bg").style.opacity =
      Math.random() * 0.5 + 0.2;
  }, 5000);
});
