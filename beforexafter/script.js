const slider = document.getElementById("slider"); // busca um elemento HTML igual a "slider" e armazena esse elemento na constante slider.
const before = document.querySelector(".before-image"); //  procura um elemento HTML igual a "before-image" e armazena esse elemento na constante before.
const app = document.getElementById('app'); // busca um elemento HTML igual a "app" e armazena esse elemento na constante app. 


// addEventListener adiciona um ouvinte de eventos ao elemento slider. Este ouvinte vai responder a eventos de "input".
slider.addEventListener("input",(e) => { // Isso é uma função anônima (arrow function) que será executada quando o evento "input" ocorrer. Ela recebe um parâmetro e, que é um objeto de evento que contém informações sobre o evento que ocorreu.
  before.style.width= e.target.value + '%'  // O valor da largura está sendo definido com base no valor do controle deslizante (slider). e.target refere-se ao elemento que disparou o evento, ou seja, o próprio slider. 
  // e.target.value pega o valor atual do controle deslizante, e + '%' adiciona o símbolo de porcentagem para que a largura seja definida em porcentagem. Isso provavelmente está sendo usado para controlar o tamanho de um elemento na página, como uma imagem.
  app.style.left= `calc(${e.target.value}%)` // A posição é definida usando a função calc() do CSS, que permite realizar cálculos com valores CSS. Neste caso, o valor está sendo calculado com base no valor atual do controle deslizante (slider). e.target.value novamente pega o valor atual do controle deslizante, 
  // e é adicionado % para indicar que a posição é especificada em porcentagem. Isso provavelmente está sendo usado para posicionar o elemento app horizontalmente na página, dependendo do valor do controle deslizante.
});