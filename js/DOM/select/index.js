// TODO: сделать обработчик клика по элементу списка

// Кастомны селектор

class CustomSelect {
  static #customSelectCount = 0; // используется, если не задан id
  #currentSelectedOption = {};

  constructor(options, id = "") {
    this.options = options;
    if (id !== "") {
      this.id = id;
      this.box = `select-dropdown--${this.id}`;
      CustomSelect.#customSelectCount += 1;
    } else {
      this.id = CustomSelect.#customSelectCount;
    }

    if (typeof options === "object") {
      this.#_generateSelector();
    } else {
      console.error('Ошибка инициализации: неверный параметр "options"');
    }
  }

  // возвращает выбранное значение
  get selectedValue() {
    return this.#currentSelectedOption;
  }

  //=======================================================================
  //        Генерация HTML кода селектора + обработчики событий
  //=======================================================================
  #_generateSelector() {
    this.select = document.createElement("div");
    this.select.setAttribute(
      "class",
      `select-dropdown select-dropdown--${this.id}`
    );
    this.select.innerHTML = `
			<button class="select-dropdown__button select-dropdown__button--${this.id}"> 
				<span class="select-dropdown__text select-dropdown__text--${this.id}">Выберите элемент</span>
			</button>
			<ul class="select-dropdown__list select-dropdown__list--${this.id}"> 
			</ul>
		`;

    const list = this.select.querySelector(".select-dropdown__list");
    for (const li of this.options) {
      list.innerHTML += `<li class="select-dropdown__list-item" data-value="${li.value}">${li.text}</li>`;
    }

    this.select.addEventListener("click", (e) => {
      if (e.target.closest(".select-dropdown__button")) {
        this.select
          .querySelector(".select-dropdown__list")
          .classList.toggle("active");
      }
      if (e.target.closest("li")) {
        const li = e.target.closest("li");
        this.#_setSelectedOption(li, li.dataset.value);
        this.#_closeSelect();
      }
    });
  }

  //=======================================================================
  //                Обрабатывает выбор элемента из списка
  //=======================================================================
  #_setSelectedOption(target, id) {
    this.select
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("selected"));
    target.classList.add("selected");
    console.log(this.options);
    const result = this.options.find((obj) => obj.value === Number(id));
    this.#currentSelectedOption = result;
    this.select.querySelector(".select-dropdown__text").innerText =
      this.#currentSelectedOption.text;
  }

  //=======================================================================
  //          открывые/закрытие селектора селектор + редер DOM
  //=======================================================================
  #_openSelect() {
    const list = this.select.querySelector(".select-dropdown__list");
    list.classList.add("active");
  }

  #_closeSelect() {
    const list = this.select.querySelector(".select-dropdown__list");
    list.classList.remove("active");
  }

  render(container) {
    container?.append(this.select);
  }
}

const options = [
  { value: 1, text: "JavaScript" },
  { value: 2, text: "NodeJS" },
  { value: 3, text: "ReactJS" },
  { value: 4, text: "HTML" },
  { value: 5, text: "CSS" },
];

const customSelect = new CustomSelect(options, "123");
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);
