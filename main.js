function generateRandomHex() {
  let random = "#";
  let counter = 0;

  while (counter < 6) {
    let intOrChar = generateRandomNumber(2) + 1;
    random += intOrChar == 1 ? generateRandomNumber(10) : generateRandomChar();
    counter++;
  }
  return random;
}

function generateRandomNumber(topBound) {
  return Math.floor(Math.random() * topBound);
}

function generateRandomChar() {
  const characters = "abcdef";
  return characters.charAt(generateRandomNumber(characters.length));
}

function init() {
  const color = generateRandomHex();
  document.getElementById("body").style.backgroundColor = color;

  //document.getElementById("color").style.fontSize = `${generateRandomNumber(60)}px`;
  document.getElementById("color").innerHTML = `${color}`;
}

setInterval(() => {
  init();
}, 1000); //time
