const form = document.querySelector("#tasks .create-task-block");
const taskList = document.querySelector("#tasks .tasks-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = e.target.taskName.value.trim();
  if (task === "") {
    createErrorSpan("Название задачи не должно быть пустым", form);
  } else if (isTaskUnique(taskList, task) === false) {
    createErrorSpan("Задача с таким названием уже существует.");
  } else {
    deleteErrorSpan();
    const taskId = Date.now();
    taskList.append(createTask({ id: taskId, completed: true, text: task }));
  }
});

// Проверяет, есть ли уже task в taskList
function isTaskUnique(taskList, task) {
  const tasks = taskList.querySelectorAll(
    ".task-item__main-container .task-item__text"
  );

  if (tasks.length === 0) {
    return true;
  }

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].innerText.toLowerCase() === task.toLowerCase()) {
      return false;
    }
  }
  return true;
}

// Выводит сообщение об ошибке. принимает объект формы куда выводить и текст ошибки
function createErrorSpan(msg, target = form) {
  let errorSpan = target.querySelector(".error-message-block");
  if (errorSpan) {
    errorSpan.innerText = msg;
  } else {
    errorSpan = document.createElement("span");
    errorSpan.setAttribute("class", "error-message-block");
    errorSpan.innerText = msg;
    target.append(errorSpan);
  }
}

// удаляет сообщение об ошибке
function deleteErrorSpan(target = form) {
  const errorSpan = target.querySelector(".error-message-block");
  errorSpan?.remove();
}

// Создает и возвращает готовый элемент задачи
function createTask({ id, completed, text }) {
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

  return taskElement;
}
