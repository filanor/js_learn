createModal();
const form = document.querySelector("#tasks .create-task-block");
const taskList = document.querySelector("#tasks .tasks-list");
const modal = document.querySelector(".modal-overlay");

/**
 ============================================================================ 
 =======================      Добавление задач      =========================
 ============================================================================
*/

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

/**
 ============================================================================ 
 =======================      Обработка ошибок      =========================
 ============================================================================
*/

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

/**
 ============================================================================ 
 =========================      Удаление задач      =========================
 ============================================================================
*/

taskList.addEventListener("click", (e) => {
  const chosenTask = e.target.closest(".delete-button");
  if (chosenTask) {
    openModal(chosenTask.dataset["delete-task-id"]);
  }
});

function deleteTask(id) {
  const task = taskList.querySelector(`[data-task-id="${id}"]`);
  task.remove();
}
/**
 ============================================================================ 
 ==============     Работа модального окна подтверждения     ================
 ============================================================================
*/

modal?.addEventListener("click", (e) => {
  const btn = e.target.closest(".delete-modal__button");
  if (btn) {
    const id = modal.dataset["delete-task-id"];
    closeModal();
    if (btn.classList.contains("delete-modal__confirm-button")) {
      deleteTask(id);
    }
  }
});

function openModal(id) {
  modal.classList.remove("modal-overlay_hidden");
  modal.setAttribute("data-delete-task-id", id);
}

function closeModal() {
  modal?.classList.add("modal-overlay_hidden");
}

/**
 ============================================================================ 
 ==================      Создание HTML элементов      =======================
 ============================================================================
*/

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
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${id}">
          Удалить
        </button>
      </div>`;

  const taskElement = document.createElement("div");
  taskElement.setAttribute("class", "task-item");
  taskElement.setAttribute("data-task-id", id);
  taskElement.innerHTML = task;

  return taskElement;
}

// Создает элемент модального окна
function createModal() {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal-overlay modal-overlay_hidden");
  modal.innerHTML = `
  <div class="delete-modal">
    <h3 class="delete-modal__question">
      Вы действительно хотите удалить эту задачу?
    </h3>
    <div class="delete-modal__buttons">
      <button class="delete-modal__button delete-modal__cancel-button">
        Отмена
      </button>
      <button class="delete-modal__button delete-modal__confirm-button">
        Удалить
      </button>
    </div>
  </div>
  `;

  document.querySelector("body").append(modal);
}
