const slider = document.getElementById("myRange");
const output = document.getElementById("output");
const change = document.getElementById("switch");
const MonthtoYear = document.getElementById("MonthtoYear");
const checkbox = document.getElementById("checkbox");
const prce = document.getElementById("price");

let arr = [8, 12, 16, 24, 36];
let secondArr = [10, 50, 100, 500, 1];
slider.value = this.value;
checkbox.checked = false;

slider.addEventListener("input", function () {
  let Value = slider.value;
  this.style.background = `linear-gradient(to right, #9aeee0 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%)`
  prce.textContent = `${secondArr[Value-1]}K PAGEVIEWS`
  if (checkbox.checked == true) {
    output.textContent = `$${arr[Value - 1] - (arr[Value - 1] / 100) * 25}.00`;
  } else output.textContent = `$${arr[Value - 1]}.00`;
});

change.addEventListener("change", function () {
  let Value = slider.value;

  if (checkbox.checked == true) {
    output.textContent = `$${arr[Value - 1] - (arr[Value - 1] / 100) * 25}.00`;
    MonthtoYear.textContent = "/year";
  } else {
    output.textContent = `$${arr[Value - 1]}.00`;
    MonthtoYear.textContent = "/month";
  }
});

