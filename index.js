const inPrice = document.querySelector("#initial-price");
const qty = document.querySelector("#qty");
const cuPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");
const gifProfit = document.querySelector(".gif-container-profit");
const gifLoss = document.querySelector(".gif-container-loss");
const body = document.querySelector("body");

hideGifProfit();
hideGifLoss();

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  const i = ~~inPrice.value;
  const q = ~~qty.value;
  const c = ~~cuPrice.value;
  const profit = q * (c - i);
  const percent = (profit / (i * q)) * 100;

  if (i > 0 && q > 0 && c > 0) {
    if (profit > 0) {
      showGifProfit();
      hideGifLoss();
      showMessageProfit(
        "Awesome! Your profit is Rs." +
          profit +
          " and the percent is " +
          percent +
          "%"
      );
    } else if (profit < 0) {
      hideGifProfit();
      showGifLoss();

      if (percent <= -50) {
        showMajorLoss();
        hideGifLoss();
        showMessageMajorLoss(
          "Bummer! You made a loss of Rs." +
            Math.abs(profit) +
            " and the percent is " +
            percent +
            "%"
        );
      } else {
        hideMajorLoss();
        showMessageLoss(
          "Oh no! You made a loss of Rs." +
            Math.abs(profit) +
            " and the percent is " +
            percent +
            "%"
        );
      }
    } else {
      hideGifLoss();
      hideGifProfit();
      hideMajorLoss();
      showMessage("Hey, you sold it cost to cost");
    }
  } else {
    showMessage("Please enter only positive number!");
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

function showGifProfit() {
  gifProfit.style.display = "block";
}

function hideGifProfit() {
  gifProfit.style.display = "none";
}

function showGifLoss() {
  gifLoss.style.display = "block";
}

function hideGifLoss() {
  gifLoss.style.display = "none";
}

function showMajorLoss() {
  body.style.backgroundColor = "#f87171";
}

function hideMajorLoss() {
  body.style.backgroundColor = "white";
}

function showMessageMajorLoss(msg) {
  message.style.display = "block";
  message.style.color = "#1d4ed8";
  message.style.fontSize = "2em";
  message.innerText = msg;
}
