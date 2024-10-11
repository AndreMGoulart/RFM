window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) { // Define a distância de rolagem para ativar o efeito
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});