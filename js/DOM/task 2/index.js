const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

// Функция возвращает готовый элемент с заданными параметрами
const createTask = ({ id, completed, text }) => {
  console.log(id, completed, text);
  const task = `    
      <div class="task-item__main-container">
        <div class="task-item__main-content">
          <form class="checkbox-form">
            <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
            <label for="task-${id}"></label>
          </form>
          <span class="task-item__text">
            ${text}
          </span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
          Удалить
        </button>
      </div>`;

  const taskElement = document.createElement("div");
  taskElement.setAttribute("class", "task-item");
  taskElement.setAttribute("data-task-id", id);
  taskElement.innerHTML = task;
  console.log("taskElement", taskElement);

  return taskElement;
};

const taskList = document.querySelector(".tasks-list");

for (const task of tasks) {
  console.log(task);
  taskList.append(createTask(task));
}
