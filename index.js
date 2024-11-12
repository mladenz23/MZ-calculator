"use strict";

const display = document.querySelector("#display");
const btns = document.querySelectorAll(".calc-item");
let nr = "";

const btnsArr = btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "=") {
      if (nr.includes("%")) {
        const arr = nr.split("%");
        nr = String((arr[0] / 100) * arr[1]);
        display.innerHTML = nr;
        shrinkDisplay(nr);
      } else {
        nr = String(eval(nr));
        display.innerHTML = nr;
        console.log(nr);
        shrinkDisplay(nr);
      }
    } else if (!["=", "CE", "DE"].includes(btn.value)) {
      nr += btn.value;
      display.innerHTML = nr;
      shrinkDisplay(nr);
    } else if (btn.value === "CE") {
      nr = "";
      display.innerHTML = nr;
      shrinkDisplay(nr);
    } else if (btn.value === "DE") {
      nr = nr.slice(0, -1);
      display.innerHTML = nr;
      shrinkDisplay(nr);
    }
  });
});

const shrinkDisplay = (number) => {
  if (number.length <= 7) display.style.fontSize = "90px";
  if (number.length > 7) display.style.fontSize = "70px";
  if (number.length > 10) display.style.fontSize = "50px";
  if (number.length > 14) {
    display.style.fontSize = '40px';
    display.innerHTML = "Number is too long!";
  }
};
