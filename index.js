let colors = ["#876445", "#4B56D2", "#4B56D2", "#000", "#FED049"];
var mainTitle = document.getElementById("main-title");
mainTitle.addEventListener("click", (e) => {

  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  mainTitle.style.color = randomColor;
});
