document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu on click
    document.getElementById("menu-toggler").addEventListener("click", function () {
      toggleBodyClass("menu-active");
    });
  
    function toggleBodyClass(className) {
      document.body.classList.toggle(className);
    }
  });
  