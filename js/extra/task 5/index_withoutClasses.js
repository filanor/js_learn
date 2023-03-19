const btn = document.querySelector(".donate-form__submit-button");
const list = document.querySelector(".donates-container__donates");
const total = document.querySelector("#total-amount");
const input = document.querySelector(".donate-form__donate-input");

const generateItem = (amount) => {
  const item = document.createElement("div");
  item.className = "donate-item";
  item.innerHTML = `${utils.getFormatedDate()} - <b>${amount}$`;
  return item;
};

// Проверяем введенные символы
input.addEventListener("input", (e) => {
  const inputValue = e.data;

  if (!utils.isDigital(inputValue)) {
    input.value = input.value.slice(0, -1);
  }
});

const changeTotal = (amount) => {
  const totalAmount = total.innerHTML.slice(0, -1);
  total.innerHTML = Number(totalAmount) + Number(amount) + "$";
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = input.value;

  if (amount !== "") {
    list.append(generateItem(amount));
    input.value = "";
    changeTotal(amount);
  }
});
