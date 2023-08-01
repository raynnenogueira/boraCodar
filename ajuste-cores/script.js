// Selecionar elementos específicos do DOM (HTML) usando os métodos querySelector e getElementById. 
// Cada elemento selecionado é armazenado em uma constante, permitindo que você os utilize posteriormente em seu código JavaScript
const colorPreview = document.querySelector(".visualization");
const colorSlider = document.getElementById("hue-slider");
const glowSlider = document.getElementById("glow-slider");
const contrastSlider = document.getElementById("contrast-slider");

colorSlider.addEventListener("input", function () {
  const hue = this.value; // this se refere ao elemento que disparou o evento
  const color = `hsl(${hue}, 100%, 50%)`; // a cor tera saturação completa e luminosidade media

  colorPreview.style.backgroundColor = color; //definindo o fundo do elemento
  colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`; // criação de uma sombra
});

glowSlider.addEventListener("input", function () {
  const glow = this.value;
  colorPreview.style.boxShadow = `0px 0px ${glow}px 13px`;
});

contrastSlider.addEventListener("input", function () {
  const contrast = this.value;
  colorPreview.style.filter = `contrast(${contrast}%)`;
});