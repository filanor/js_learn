const body = document.getElementsByTagName("body")[0];

// Сохраняем шаблон формы
const formContent = `
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя">
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль">
</label>
<button type="submit">
    Подтвердить
</button>
`;

// создаем элемент формы , задаем класс и
const formEl = document.createElement("form");
formEl.setAttribute("class", "create-user-form-1");

formEl.innerHTML = formContent;

// Добавляем формы в тег <body> двумя методами:
body.innerHTML = `<form class="create-user-form">${formContent}</form>`;
body.append(formEl);
