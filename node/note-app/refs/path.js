/**
 *  !! Базовый модуль node.js: Path
 * Докуменация:
 * https://nodejs.org/dist/latest-v17.x/docs/api/path.html
 *
 * Данный модуль предоставляет утилиты для работы с путями
 * файлов и каталогов
 *
 * Данный модуль позволяет избежать ошибок, свяанных  с названием папок и файлов
 */
const chalk = require("chalk");
const path = require("path");

console.log(chalk.cyan("Наименование файла"), path.basename(__filename));
console.log(chalk.cyan("Абсолютный путь до файла"), path.dirname(__filename));
console.log(chalk.cyan("Расширение файла"), path.extname(__filename));
console.log(chalk.cyan("Объект с данными о файле"), path.parse(__filename));
console.log(
  chalk.cyan("Создание адреса"),
  path.resolve(__dirname, "..", "index.js")
);
