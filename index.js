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

  if (profit > 0) {
    showMessageProfit(
      "Hey, the profit is " + profit + " and the percent is " + percent + "%"
    );
  } else if (profit < 0) {
    showMessageLoss(
      "Hey, you made a loss of " +
        profit +
        " and the percent is " +
        percent +
        "%"
    );
  } else {
    showMessage("Hey, you sold it cost to cost");
  }
}

function showMessageProfit(msg) {
  message.style.display = "block";
  message.style.color = "green";
  message.innerText = msg;
}

function showMessageLoss(msg) {
  message.style.display = "block";
  message.style.color = "red";
  message.innerText = msg;
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
