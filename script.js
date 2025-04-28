document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS Library
  AOS.init({
    duration: 1200,
    once: true,
  });


  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
});
