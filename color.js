const content = document.querySelector(".text__content");
const colorBtn = document.querySelector(".color");
const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");

const generateRandomColor = () => {
  // const letters = "0123456789ABCDEF";
  // let color = "#";
  // for (let i = 0; i < 6; i++) {
  //   color += letters[Math.floor(Math.random() * 16)];
  // }
  // content.style.color = color;

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  content.style.color = `rgb(${r},${g},${b})`;
};

colorBtn.addEventListener("click", generateRandomColor);

let font = 36;
const addSize = () => {
  if (font < 72) {
    font += 4;
    content.style.fontSize = `${font}px`;
  }
};

const makeSmaller = () => {
  if (font > 16) {
    font -= 4;
    content.style.fontSize = `${font}px`;
  }
};

sizeUp.addEventListener("click", addSize);
sizeDown.addEventListener("click", makeSmaller);
