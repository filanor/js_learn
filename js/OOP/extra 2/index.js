class CarService {
  static #DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.#DefaultWorkingHours;
  }

  repairCar(carName = false) {
    if (!carName) {
      console.error(
        "Вам необходимо указать название машины, чтобы ее отремонтировать"
      );
      return false;
    }
    if (this._isWorking()) {
      console.log(
        `Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`
      );
      return true;
    }
    console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
    return false;
  }

  // проверяет, рабочее ли сейчас время
  _isWorking() {
    const hour = new Date().getHours();
    const from = this.workingHours.from.slice(
      0,
      this.workingHours.from.indexOf(":")
    );
    const till = this.workingHours.till.slice(
      0,
      this.workingHours.till.indexOf(":")
    );
    if (hour >= Number(from) && hour < Number(till)) {
      return true;
    }
    return false;
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService.repairCar("BMW");
