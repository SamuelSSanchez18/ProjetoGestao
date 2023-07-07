// Script para Mapa imagens
var btn = document.querySelectorAll("area.modal-button");


var modals = document.querySelectorAll('.modal');


var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}


for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}


window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}

//

//Script para musica do jogo

let x = document.getElementById("musica");
function reniciar() {
  x.play();
  document.getElementById("corpo").style.backgroundImage = "url(/imagens/sinucatalvez.jpg)";
}
function para() {
  x.pause();
  document.getElementById("corpo").style.backgroundImage = "url(/imagens/telabranca.png)";
}

let y = document.getElementById("efeito");
y.volume = 0.2;


//

//Script do jogo
var totalScore = 0;
var intervals = {
  0: 'Nenhuma',
  3: "<p style class='tenta'> Calma! Os arranjos escolhidos são uma boa opção, porém funcionam, apenas, em curto prazo, ou seja, o benefício é imediato, tendendo a não ser sustentável e consecutivo. Dessa forma, é importante refletir como as suas escolhas irão se comportar em longo prazo.</p>",
  6: "<p style class='tenta'> Persistência! Os arranjos escolhidos apresentam uma análise em médio prazo, ou seja, não são sustentáveis em longo prazo. Com um pouco de paciência, você perceberá que falta equilíbrio em relação aos arranjos escolhidos. Reflita sobre como a integração dos arranjos tendem a favorecer o crescimento sustentável.</p>",
  8: "<p style class='tenta'> Parabéns! Os arranjos escolhidos levam em consideração uma perspectiva em longo prazo. A integração entre saúde, educação e energia, coloca em relevo, respectivamente, os aspectos: financeiro, pessoas e infraestrutura, visando alicerçar a economia para alcançar resultados consistentes e significativos, com estratégias voltadas para o crescimento sustentável, inclusivo e o bem-estar da sociedade.</p>"
}
const flippedCards = [];
function canFlip(group, card) {
  return !group.classList.contains("flipped") && !card.classList.contains("flipped");
}
function flipCard(group, card, score, backText) {
  if (!flippedCards.includes(card)) {
    if (!canFlip(group, card)) return;
    flippedCards.push(card);
    card.children[0].innerHTML = backText;
    totalScore += score;
  } else {
    flippedCards.splice(flippedCards.indexOf(card), 1);
    card.children[0].innerHTML = "";
    totalScore -= score;
  }
  document.getElementById("score").innerHTML = totalScore;
  if (flippedCards.length == 3) {
    var newInterval;
    for (const interval in intervals) {
      if (totalScore >= interval) newInterval = intervals[interval];
    }
    document.getElementById("conclusion").innerHTML = "<strong>Resultado: </strong><br><span id='interval'>Nenhuma</span>";
    document.getElementById("interval").innerHTML = newInterval;
  } else {
    document.getElementById("conclusion").innerHTML = "";
  }
  group.classList.toggle("flipped");
  card.classList.toggle("flipped");
  y.play();
}
//
