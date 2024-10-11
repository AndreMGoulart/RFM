// Seleciona o botão e a navbar
const navbarToggler = document.getElementById('navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Adiciona evento de clique no botão
navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('active'); // Alterna a classe 'active'
    navbarToggler.classList.toggle('open'); // Alterna a classe 'open' para animação
});

// Seleciona todos os links na navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Adiciona evento de clique para cada link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navbarCollapse.classList.remove('active'); // Remove a classe 'active'
        navbarToggler.classList.remove('open'); // Remove a classe 'open' para animação
    });
});

