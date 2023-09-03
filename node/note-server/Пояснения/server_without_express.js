/**
 * !! Просто приложение, реализующее сервер.
 * https://nodejs.org/docs/latest-v20.x/api/http.html
 *
 * !! nodemon
 * В данном примере используется пакет nodemon - он позволяет автоматизировать сервер и
 * не перезагружать скрипт при изменении кода.
 * Для этого в package.json добавлен скрипт:
 * ?? "serve": "nodemon index"
 * Запускается: npm run serve
 */

const http = require("http");
const chalk = require("chalk");
const port = 3000;

/**
 * !! createServer - создает сервер.
 * В качестве параметров принимает колбык с 2мя параметрами:
 * ?? req  - содержит информацию о запросе, пришедшем на сервер
 * Например req.method - Показывает метод запроса, req.url - Показывает url запроса т тд
 * ?? res -
 */
const server = http.createServer(async (req, res) => {
  // Если Мы получили GET запрос
  if (req.method === "GET") {
    // то загружаем файл index.html
    const content = await fs.readFile(path.join(basePath, "index.html"));

    // устанавливаем код ответа и хедер (необязательное действие)
    res.writeHead(200, { "Content-Type": "text/html" });
    // и возвращаем загруженные данные в качестве ответа;
    res.end(content);
    // Если приходит POST запрос
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    req.on("data", (data) => {
      body.push(Buffer.from(data));
      console.log(body);
    });
    req.on("end", () => {
      const title = body.toString().split("=")[1].replaceAll("+", " ");
      addNote(title);
      res.end(`Title = ${title}`);
    });
  }

  console.log("Показывает метод запроса", req.method);
  console.log("Показывает url запроса", req.url);
  console.log("Показывает хедер запроса", req.headers);

  // res.end("Hello from Server");
});

/**
 * метод listen() запускает сервер.
 * Первым параметром передается порт на котором запускается сервер
 * Вторым - колбэк, который выхывается при успешном запуске сервера
 * */

server.listen(port, () => {
  console.log(chalk.green(`Server has been started at port ${port}...`));
});
