const inPrice = document.querySelector("#initial-price");
const qty = document.querySelector("#qty");
const cuPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  const i = ~~inPrice.value;
  const q = ~~qty.value;
  const c = ~~cuPrice.value;
  const profit = q * (c - i);
  const percent = (profit / (i * q)) * 100;

  showMessage(
    "Hey, the profit is " + profit + " and the percent is " + percent + "%"
  );
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
