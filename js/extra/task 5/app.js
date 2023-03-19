import DonateForm from "./src/Donates";
import DonateList from "./src/DonatesList";
export default class App {
  constructor() {
    this.container = document.querySelector("body");
    this.donatesList = new DonateList();
    this.donatesForm = new DonateForm(this.donatesList);
  }

  run() {
    this.container.append(this.donatesForm.render(), this.donatesList.render());
  }
}
