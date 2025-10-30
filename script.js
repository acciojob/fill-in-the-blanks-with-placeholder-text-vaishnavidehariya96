// When the page loads, show a friendly welcome message
window.onload = function () {
  alert("Welcome to Accio Ipsum!");
};

// Change the paragraph color when clicked
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector("p");

  paragraph.addEventListener("click", function () {
    paragraph.style.color = "#007bff";
    paragraph.style.transition = "color 0.5s";
  });
});
