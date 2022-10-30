const input = document.querySelector("#converter");
const celciusUnit = document.querySelector(".one");
const farenheitUnit = document.querySelector(".two");
const konvertButton = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const result = document.querySelector(".result");
const proof = document.querySelector(".proof");

const convertCelcius = () => {
  if (input.value !== ``) {
    const calculatedValue = input.value * 1.8 + 32;
    result.textContent = `${input.value}°C to ${calculatedValue.toFixed(1)}°F`;
    result.style.color = "green";
    proof.textContent = `Obliczenia: ${
      input.value
    }°C*1.8 + 32 = ${calculatedValue.toFixed(1)}°F`;
    input.value = "";
  } else {
    result.textContent = "Nie wprowadziłeś żadnej wartosci!";
    result.style.color = "red";
  }
};

const converFarenheit = () => {
  if (input.value !== ``) {
    const calculatedValue = (input.value - 32) / 1.8;

    result.textContent = `${input.value}°F to ${calculatedValue.toFixed(1)}°C`;
    proof.textContent = `Obliczenia: (${
      input.value
    }°F-32) / 1.8 = ${calculatedValue.toFixed(1)}°C`;
    result.style.color = "green";
    input.value = "";
  } else {
    result.textContent = "Nie wprowadziłeś żadnej wartosci!";
    result.style.color = "red";
  }
};

const mainCalculation = () => {
  if (celciusUnit.textContent == "°C") {
    convertCelcius();
  } else {
    converFarenheit();
  }
};

const changeValues = () => {
  if (celciusUnit.textContent == "°C") {
    celciusUnit.textContent = "°F";
    farenheitUnit.textContent = "°C";
    result.textContent = "";
    proof.textContent = "";
  } else {
    celciusUnit.textContent = "°C";
    farenheitUnit.textContent = "°F";
    result.textContent = "";
    proof.textContent = "";
  }
};

const reset = () => {
  result.textContent = "";
  //   celciusUnit.textContent = "°C";
  //   farenheitUnit.textContent = "°F";
  input.value = "";
  proof.textContent = "";
};

changeBtn.addEventListener("click", changeValues);
konvertButton.addEventListener("click", mainCalculation);
resetBtn.addEventListener("click", reset);
