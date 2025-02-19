document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.style.boxShadow = "0px 10px 30px rgba(0, 170, 255, 0.5)";
    });

    project.addEventListener("mouseleave", () => {
      project.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".live-demo");
  const closeButtons = document.querySelectorAll(".close-btn");
  const modals = document.querySelectorAll(".modal");

  // Open Modal
  modalButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex";
        setTimeout(() => {
          modal.classList.add("show");
        }, 10); // Small delay to trigger animation smoothly
      }
    });
  });

  // Close Modal when clicking close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal"); // Find the closest modal
      if (modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none"; // Ensures modal hides completely after animation
        }, 300);
      }
    });
  });

  // Close Modal when clicking outside of it
  window.addEventListener("click", function (e) {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    });
  });
});
