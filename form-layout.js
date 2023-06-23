document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var dropdown = document.querySelector(".dropdown");
  
    dropdownToggle.addEventListener("click", function() {
      dropdown.classList.toggle("show");
    });
  });
  