window.onload = function () {
    setTimeout(() => {
      alert("Bienvenue dans le portfolio de Rofeida !");
    }, 500);
  };
  
  // Effet d’apparition douce des sections
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
  function afficherMerci() {
    alert("Merci pour votre attention !");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Merci pour votre message, Rofeida le lira très bientôt !");
      form.reset();
    });
  });
