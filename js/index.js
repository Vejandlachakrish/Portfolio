document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector(".floating-avatar");

  // Smooth Hover Effect on Avatar
  avatar.addEventListener("mouseover", function () {
    avatar.style.boxShadow = "0px 0px 20px rgba(0, 170, 255, 0.5)";
  });

  avatar.addEventListener("mouseleave", function () {
    avatar.style.boxShadow = "none";
  });
});
