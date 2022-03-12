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

function chamar() {
  if (button.value == "zerado") {
    var valor = Math.floor(Math.random() * 20);
    trocarImg.src = `./assets/img/${imgs[valor]}`;
    button.innerHTML = "Reiniciar";
    button.value = "completo";
  } else {
    button.innerHTML = "Descubra!";
    button.value = "zerado";
    trocarImg.src = `./assets/img/0.png`;
  }
}
