document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.testimonial-item');
  const controlsContainer = document.querySelector('.controls');
  let currentIndex = 0;
  const totalItems = items.length;
  const autoScrollInterval = 5000; // Tempo entre as trocas automáticas

  // Inicializa os itens
  function updateCarousel() {
      items.forEach((item, index) => {
          item.style.display = (index === currentIndex) ? 'block' : 'none'; // Mostra apenas o item atual
      });

      // Atualiza o controle ativo
      const controlItems = document.querySelectorAll('.control-item');
      controlItems.forEach((control, index) => {
          control.classList.toggle('active', index === currentIndex);
      });
  }

  // Cria os retângulos de controle
  function createControls() {
      for (let i = 0; i < totalItems; i++) {
          const control = document.createElement('div');
          control.classList.add('control-item');
          control.addEventListener('click', () => {
              currentIndex = i; // Muda o índice atual para o que foi clicado
              updateCarousel();
              resetAutoScroll(); // Reinicia o auto scroll ao clicar
          });
          controlsContainer.appendChild(control);
      }
  }

  // Atualiza o carousel automaticamente
  function autoScroll() {
      currentIndex = (currentIndex + 1) % totalItems; // Avança para o próximo
      updateCarousel();
  }

  // Reinicia o auto scroll
  let autoScrollTimer = setInterval(autoScroll, autoScrollInterval);

  function resetAutoScroll() {
      clearInterval(autoScrollTimer); // Limpa o intervalo atual
      autoScrollTimer = setInterval(autoScroll, autoScrollInterval); // Reinicia o intervalo
  }

  // Inicializa o carousel e os controles
  createControls();
  updateCarousel();
});

