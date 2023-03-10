/*
Сейчас тебе необходимо реализовать следующую логику в коде шаг за шагом:

Кристина и Олег получили посылки и ушли из очереди. Тебе необходимо удалить их из массива.
Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв, 
и она успеет обслужить только Кирилла. Поэтому все остальные люди, стоящие за Кириллом, решили не ждать, когда закончится обед, 
и просто ушли из отделения почты. Тебе необходимо сначала удалить Кирилла из массива peopleWaiting, а затем удалить людей, которые 
не успели получить посылки.
Когда какой-либо человек получает посылку, необходимо вывести в модальном окне сообщение: “ name получил(а) посылку. 
В очереди осталось length человек.” (Замени name на имя человека, получившего посылку, а length - на количество человек, 
  которые остались в очереди).

Если же человек не получил посылку и ушел из очереди, то выведи в модальном окне через alert() сообщение: 
“ name не получил(а) посылку и ушел(ла) из очереди”.
*/
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

// giveParcel() - для выдачи посылки и удаления клиента из начала массива,
function giveParcel() {
  let length = peopleWaiting.length;
  if (length === 0) {
    return;
  }
  let name = peopleWaiting.shift();
  alert(
    `${name} получил(а) посылку. В очереди осталось ${length - 1} человек.`
  );
}

// удаления клиента, который не получил посылку из конца списка.
function leaveQueueWithoutParcel() {
  if (peopleWaiting.length === 0) {
    return;
  }
  let deletedName = peopleWaiting.pop();
  alert(`${deletedName} не получил(а) посылку и ушел(ла) из очереди`);
}

giveParcel();
giveParcel();
giveParcel();

leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
