var btn = document.getElementById("btn");
var imgs = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
];
var frases = [
  "O amor está no ar!",
  "Hmm não vou falar é nada!",
  "Vai ser um ano bom!",
  "O que será que vem ai?",
  "Vixi, boa sorte viu?",
  "Sai de baixo!",
  "Kkkk, espero que não seja nada trágico",
  "Cuidado hein!",
  "Que maravilha!",
  "Ano próspero para nós!",
  "O que será que isso significa?",
  "Sinto muito...",
  "É... Não tem muito o que dizer",
  "Eu ouvi festa????",
  "...",
  "Espero que fique tudo bem!",
  "Desconfie de todos, já dizia Isaac Newton!",
  "Sem sofrimento viu!",
  "Que coisa boaaaa!",
  "Tenta segurar isso ai!"
]

function chamar() {
  if (button.value == "zerado") {
    var valor = Math.floor(Math.random() * 20);
    trocarImg.src = `./assets/img/${imgs[valor]}`;
    button.innerHTML = "Reiniciar";
    button.value = "completo";
    textoImg.innerHTML = `${frases[valor]}`
  } else {
    button.innerHTML = "Descubra!";
    button.value = "zerado";
    trocarImg.src = `./assets/img/0.png`;
    textoImg.innerHTML = `O que esperar de 2022?`
  }
}
