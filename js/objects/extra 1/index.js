/*
Тебе необходимо создать функцию getTotalPriceOfShoppingBag(), которая будет принимать в себя 1 параметр shoppingBagArray - 
массив продуктов в корзине, состоящий из объектов, в каждом из которых хранится ID продукта (productId) и количество продукта 
в корзине (count).

Также у интернет-магазина есть глобальный объект, в котором хранится вся нужная информация о каждой единице продукта: groceries

Функция getTotalPriceOfShoppingBag() должна возвращать общую стоимость всех товаров в корзине с учетом скидок 
(discount, указаны в процентах) и с учетом указанных клиентом количеством продуктов. 
Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью метода toFixed().
*/
const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10,
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0,
  },
  // more items...
};

const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
  let totalPrice = 0;
  for (item of shoppingBagArray) {
    const { price, discount } = groceries[item.productId];
    const multiplier = 1 - discount / 100;

    totalPrice += price * multiplier * item.count;
  }
  return totalPrice.toFixed(2);
};

const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05
