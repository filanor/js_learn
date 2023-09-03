/**
 *  !! Базовый модуль node.js: OS
 * Докуменация:
 * https://nodejs.org/dist/latest-v17.x/docs/api/os.html#os
 *
 * Данный модуль предоставляет методы и свойста, связанные с
 * операционной системой
 */

const os = require("os");

console.log("Данные о сетевом подключении", os.networkInterfaces());
console.log("Архитектора процессора", os.arch());
console.log("Домашняя директория в виде строки", os.homedir());
console.log("Свободная память", os.freemem());
console.log(os.constants);
