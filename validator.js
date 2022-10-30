const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const validator = () => {
  if (
    pass.value.length >= minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = " Twoje hasło jest silne!";
    p.style.color = "green";
  } else if (
    pass.value.length >= minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = "twoje hasło jest poprawne";
    p.style.color = "yellow";
  } else {
    p.textContent = "twoje hasło jest słabę!";
    p.style.color = "red";
  }
};

const checkString = () => {
  if (pass.value !== ``) {
    validator();
  } else {
    p.textContent = "Nie podałeś hasła..";
    p.style.color = "grey";
  }
};

pass.addEventListener("keyup", checkString);

// generator hasła//
