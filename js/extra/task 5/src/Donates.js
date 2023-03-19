import * as utils from "./utils";

export default class DonateForm {
  #container;
  #total;
  #input;
  #List;
  #maxDonate;
  #minDonate;

  constructor(List, max = 100, min = 1) {
    this.#container = document.createElement("form");
    this.#container.className = "donate-form";

    this.#total = document.createElement("h1");
    this.#total.className = "total-amount";

    this.createInput();

    this.#List = List;
    this.#maxDonate = max;
    this.#minDonate = min;
  }

  createInput() {
    const input = document.createElement("input");
    input.className = "donate-form__donate-input";
    input.setAttribute("name", "amount");
    input.setAttribute("type", "number");
    input.setAttribute("max", this.#maxDonate);
    input.setAttribute("min", this.#minDonate);
    input.setAttribute("required", "");

    input.addEventListener("input", (e) => {
      const inputValue = e.data;

      if (!utils.isDigital(inputValue)) {
        input.value = input.value.slice(0, -1);
      }
    });

    this.#input = input;
  }

  #createButton() {
    const btn = document.createElement("button");
    btn.className = "donate-form__submit-button";
    btn.setAttribute("type", "submit");
    btn.innerHTML = "Задонатить";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const amount = Number(this.#input.value.trim());
      switch (true) {
        case amount > this.#maxDonate:
          console.log("sdasdfdsf");
          alert(`Максимальная сумма доната: ${this.#maxDonate}`);
          break;
        case amount < this.#minDonate:
          alert(`Минимальная сумма доната ${this.#minDonate}`);
          break;
        default:
          this.#List.addItem(utils.getFormatedDate(), amount);
          this.#input.value = "";
          this.#changeTotal(this.#List.getTotalAmount());
      }
    });
    return btn;
  }

  #changeTotal(totalAmount) {
    this.#total.innerText = `${totalAmount}$`;
  }

  render() {
    const totalAmount = this.#List.getTotalAmount();
    this.#total.innerText = `${totalAmount}$`;

    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.innerHTML = "Введите сумму в $";
    label.appendChild(this.#input);

    this.#container.append(this.#total, label, this.#createButton());
    return this.#container;
  }
}
