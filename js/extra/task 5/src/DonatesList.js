export default class DonateList {
  #container;
  #list;
  #donateList = [
    { date: "July 6th 2021, 10:28:49 am", amount: 20 },
    { date: "July 6th 2021, 10:28:49 am", amount: 3 },
    { date: "July 6th 2021, 10:28:49 am", amount: 1 },
  ];

  constructor() {
    this.#container = document.createElement("div");
    this.#container.className = "donates-container";
    this.#list = document.createElement("div");
    this.#list.className = "donates-container__donates";
  }

  getTotalAmount() {
    console.log("sadfadsfsdaf");
    let totalAmount = 0;
    for (const donate of this.#donateList) {
      totalAmount += donate.amount;
    }
    return totalAmount;
  }

  addItem(date, amount) {
    this.#donateList.push({ date, amount });
    this.#list.append(this.#createItem(date, amount));
  }

  #createItem(date, amount) {
    const item = document.createElement("div");
    item.className = "donate-item";
    item.innerHTML = `${date} - <b>${amount}$</b>`;
    return item;
  }

  #createDonateList() {
    for (let i = 0; i < this.#donateList.length; i++) {
      this.#list.append(
        this.#createItem(this.#donateList[i].date, this.#donateList[i].amount)
      );
    }
  }

  render() {
    console.log("list");
    const title = document.createElement("h2");
    title.className = "donates-container__title";
    title.innerText = "Список донатов";

    this.#createDonateList();

    this.#container.append(title, this.#list);
    return this.#container;
  }
}
