const generator = document.querySelector(".generate-password-button");
const generatorInput = document.querySelector(".strong-paswword-input");

const lettersG = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbersG = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialG = ["!", "@", "#", "$", "%", "&", "*"];

let strongPassword = [];

const randomLetters = () => {
  let randomLetter = "";
  const random = Math.random() * 25;
  randomLetter = lettersG[random.toFixed()];
  if (random.toFixed() > 12.5) {
    randomLetter = randomLetter.toUpperCase();
  }

  strongPassword.push(randomLetter);
};

const randomNumbers = () => {
  let randomNumber;
  const random = Math.random() * 8;
  randomNumber = numbersG[random.toFixed()];
  strongPassword.push(randomNumber);
};

const randomSpecial = () => {
  let randomSpecial;
  const random = Math.random() * 6;
  randomSpecial = specialG[random.toFixed()];
  strongPassword.push(randomSpecial);
};

let finalPassword = "";

const resetInput = () => {
  strongPassword = [];
};

const generate = () => {
  resetInput();
  const minLength = 45;
  for (let i = 0; i < minLength; i++) {
    const randomFunction = (Math.random() * 2).toFixed();
    if (randomFunction == 1) {
      randomNumbers();
    } else if (randomFunction == 2) {
      randomLetters();
    } else {
      randomSpecial();
    }
  }

  finalPassword = strongPassword.join("");

  generatorInput.value = finalPassword;
  console.log(finalPassword);
};

generator.addEventListener("click", generate);
