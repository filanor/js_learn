const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, orders) => {
  return patients.sort((a, b) => {
    aIndex = orders.indexOf(a.id);
    bIndex = orders.indexOf(b.id);
    return aIndex - bIndex;
  });
};

console.log(giveTalonsInOrder(people, ordersArr));
