// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Charger le logo dynamiquement
  const logoElement = document.getElementById('logo');
  if (logoElement) {
    logoElement.onerror = function () {
      console.warn('Le logo n\'a pas pu être chargé.');
    };
  }

  // Optionnel : Animation simple pour les sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      section.style.opacity = 1;
    }, 100);
  });
});