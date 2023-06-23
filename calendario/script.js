const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function render() {
    let output = ''

    const thisMonth = months[new Date(). getMonth()]

    for(let month of months) {
        const active = thisMonth == month ? 'active' : ''
        output += `<div class="${active}">${month}</div>`      // ou     // output = output + '<div>' + month + '</div>'
    }

    return output
}

// seleciona o elemento <main> e substitui seu conteúdo pelo valor retornado pela função render(). 
// Assumindo que existe um elemento <main> no documento, ele será preenchido com as divs criadas no loop.
app.querySelector('main').innerHTML = render()


//  seleciona o elemento <span> dentro do elemento <header> e substitui seu conteúdo pelo ano atual, 
// obtido através do método getFullYear() aplicado a um novo objeto Date(). 
// Isso atualizará o texto exibido no <span> com o ano atual.
app.querySelector('header span').innerHTML = new Date().getFullYear()


document.addEventListener("DOMContentLoaded", function() {
    var yearElement = document.querySelector("#app header span");
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  
    var prevButton = document.querySelector("#app header .ph-caret-left");
    var nextButton = document.querySelector("#app header .ph-caret-right");
  
    prevButton.addEventListener("click", function() {
      currentYear--;
      yearElement.textContent = currentYear;
    });
  
    nextButton.addEventListener("click", function() {
      currentYear++;
      yearElement.textContent = currentYear;
    });
  });