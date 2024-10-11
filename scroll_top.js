// Seleciona o link para rolar para o topo
const scrollToTopButton = document.getElementById('scrollToTop');

// Adiciona o evento de clique
scrollToTopButton.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({
        top: 0, // Para o topo da página
        behavior: 'smooth' // Animação suave
    });
});