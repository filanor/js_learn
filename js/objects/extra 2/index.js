/*
создать функцию startGame(), которая будет принимать в себя 2 параметра:

heroPlayer - объект игрока, который содержит свойства name - имя героя; health - шкала здоровья, которая изначально равна 100; 
heatEnemy() - функция, которая принимает в себя объект enemy и отнимает у объекта enemy 10 единиц здоровья (ключ health).
enemyPlayer - объект врага, который содержит свойства name - имя героя; health - шкала здоровья, которая изначально равна 100; 
heatHero() - функция, которая принимает в себя объект hero и отнимает у объекта hero 10 единиц здоровья (ключ health).
Внутри функции startGame() тебе необходимо случайным образом генерировать число от 0 до 1.

Если выпадает 0, то нужно вызвать метод heatEnemy() у объекта heroPlayer, если 1 - то heatHero() у enemyPlayer.
*/

const startGame = (heroPlayer, enemyPlayer) => {
  do {
    const randomHit = getRandomNumberInRange(0, 1);
    if (randomHit === 0) {
      hitChar(enemyPlayer);
      if (enemyPlayer.health <= 0) {
        const { name, health } = heroPlayer;
        console.log(`${name} победил! У него осталось ${health} здоровья`);
        return true;
      }
    } else if (randomHit === 1) {
      hitChar(heroPlayer);
      if (heroPlayer.health <= 0) {
        const { name, health } = enemyPlayer;
        console.log(`${name} победил! У него осталось ${health} здоровья`);
        return true;
      }
    }
  } while (enemyPlayer.health > 0 || heroPlayer.health > 0);
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hitChar = (char) => (char.health = char.health - 10);

const hero = {
  name: "Batman",
  health: 100,
};
const enemy = {
  name: "Joker",
  health: 100,
};

startGame(hero, enemy);
