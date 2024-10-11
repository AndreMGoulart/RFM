window.onscroll = function() {
    var header = document.getElementById("intro"); // Captura a header
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled"); // Adiciona a classe quando rola
    } else {
        header.classList.remove("scrolled"); // Remove a classe quando não rolar
    }
};