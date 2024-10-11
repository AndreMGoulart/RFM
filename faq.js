$(document).ready(function() {
  $('.faq-head').click(function() {
      const content = $(this).next('.faq-content');

      // Verifica se o conteúdo está visível
      if (content.css('max-height') === '0px') {
          // Altera o max-height para um valor que acomode o conteúdo
          content.css('max-height', '150px'); // Ajuste conforme necessário
          content.addClass('show-faq-content'); // Adiciona classe para padding
      } else {
          // Reverte o max-height para 0
          content.css('max-height', '0px'); // Retorna para o estado oculto
          content.removeClass('show-faq-content'); // Remove a classe para padding
      }
  });
});
