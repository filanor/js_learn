/**
 * !! Просто приложение, реализующее сервер.
 */
const express = require("express");
const path = require("path");
const {
  addNote,
  getNotes,
  removeNote,
  editNote,
} = require("./notes.controller");

const port = 3000;
const basePath = path.join(__dirname, "pages");

const app = express();

/**
 * * .set() - Присваивает значение указанной настройке.
 */
app.set("view engine", "ejs"); // дефолтное расширение движка рендеринга. В данном случае подключаем ejs
app.set("views", "pages"); // указывает директорию или массив директорий, где расположены views

/**
 * * .use() - позволяет добавить промежуточную обработку (middleware)
 */
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(
  /**
   * * .urlencoded() - встроенная в express.js midleware-функция, разбирающая полезную нагрузку строки запроса
   */
  express.urlencoded({
    // * extended: true означает, что req.body может содержать любые значения, extended: false - только строки
    extended: true,
  })
);

/**
 * !! .get() обрабатывает поступающие GET запросы
 */
app.get("/", async (req, res) => {
  // Если нужно просто вывести html файл без параметров.
  // res.sendFile(path.join(basePath, "index.html"));

  // * res.render() Рендерит представление (view) и отправляет разметку клиенту.
  res.render("index", {
    title: "Task App on Node + Express",
    notes: await getNotes(),
  });
});

/**
 * !! post обрабатывает поступающие POST запросы
 */
app.post("/", async (req, res) => {
  console.log(req.body);
  await addNote(req.body.title);
  res.render("index", {
    title: "Task App on Node + Express",
    notes: await getNotes(),
  });
});

app.delete("/:id", async (req, res) => {
  removeNote(req.params.id);
  res.render("index", {
    title: "Task App on Node + Express",
    notes: await getNotes(),
  });
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const editedTask = req.body.task;
  editNote(id, editedTask);
  res.render("index", {
    title: "Task App on Node + Express",
    notes: await getNotes(),
  });
});

// запускаем сервер
app.listen(port);
