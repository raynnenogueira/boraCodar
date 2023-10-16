document.addEventListener("DOMContentLoaded", function() {
    // Obtém uma lista de todos os botões com a classe "watch-trailer-button"
    const watchTrailerButtons = document.querySelectorAll(".watch-trailer-button");

    // Adiciona um ouvinte de evento de clique a cada botão
    watchTrailerButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Obtém a URL do filme a partir do atributo data
            const videoURL = button.getAttribute("data-video-url");

            // Abre a URL do filme em uma nova aba
            window.open(videoURL, "_blank");
        });
    });
});
