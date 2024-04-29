
const infoLevel = document.createElement('h1');
let contador = 0;
let incremento = 1;
let tempoTotal = 7600;
let intervalo = tempoTotal / 99;

function updateCounter() {
  
  if (contador <= 99) {
    contador += incremento;
    setTimeout(updateCounter, intervalo);
    infoLevel.textContent = contador + '%';
    level.append(infoLevel);
    level.classList.add('stopLevel');
  };
};

updateCounter();
