const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin: function (defenderObject) {
    let chanses = 0;
    for (const prop in this) {
      const isPropCorrect = typeof this[prop] !== "function";
      if (isPropCorrect && this[prop] > defenderObject[prop]) {
        chanses += 1;
      }
    }
    return [chanses, Object.keys(defenderObject).length];
  },

  improveArmy: function () {
    for (const prop in this) {
      if (typeof this[prop] !== "function") {
        this[prop] += 5;
      }
    }
  },

  attack: function (defender) {
    const [ourArmyChances, maximumChances] = this.checkChancesToWin(defender);

    if (ourArmyChances / maximumChances > 0.7) {
      console.log("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    } else {
      this.improveArmy();
      console.log(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`
      );
    }
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
