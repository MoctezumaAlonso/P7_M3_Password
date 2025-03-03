//Valores del DOM
const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const numberElement = document.querySelector("#number");
const specialElement = document.querySelector("#symbol");
const form = document.querySelector("#pg-form");
const clipBoard = document.querySelector(".clipboard");
const strengthLevel = document.getElementById('seguridad');

const fieldsArray = [
  {
    field: capitalElement,
    getChar: getCapitalLetter
  },
  {
    field: smallElement,
    getChar: getSmallLetter
  },
  {
    field: numberElement,
    getChar: getNumber
  },
  {
    field: specialElement,
    getChar: getSpecialChar
  }
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const length = lengthElement.value;
  let generatePassword = "";
  const typeArray = fieldsArray.filter(({ field }) => field.checked);

  for (i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * typeArray.length);
    const letter = typeArray[index].getChar();
    generatePassword += letter;
  }
  resultElement.value = generatePassword;
  levelSecurity(lengthElement);
});

// ESta seccion genera los elementos que conformaran la contraseña mediante valores aleatorios
function getRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function getCapitalLetter() {
  return getRandomChar(65, 90);
}

function getSmallLetter() {
  return getRandomChar(97, 122);
}

function getNumber() {
  return getRandomChar(48, 57);
}

function getSpecialChar() {
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

//Muestra el nivel de seguridad de la contraseña generada
function levelSecurity(_lengthElement) {
  if (password.length < 6) {
      seguridad.textContent = "Nivel: Bajo";
  } else if (password.length < 8) {
      seguridad.textContent = "Nivel: Medio";
  } else {
      seguridad.textContent = "Nivel: Alto";
  }
}

//Copiar al portapapeles 
clipBoard.addEventListener("click", async () => {
  const text = resultElement.value;
  if (text) {
    await navigator.clipboard.writeText(text);
    alert("Contraseña copiada");
  } else {
    alert("No se ha generado ninguna contraseña");
  }
});
