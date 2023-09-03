/**
 *  !! Базовый модуль node.js: OS
 * Докуменация:
 * https://nodejs.org/dist/latest-v17.x/docs/api/os.html#os
 *
 * Данный модуль предоставляет методы и свойста, для работы с
 * файловой системой
 */

// const fs = require('fs') - работает через колбеки.
// const fs = require('fsppromises  ') - работает через промисы.

const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

const base = path.join(__dirname, "temp");

const getContent = () => `\n${process.argv[2] ?? ""}`;

async function start() {
  try {
    if (fsSync.existsSync(base)) {
      await fs.appendFile(path.join(base, "log.txt"), getContent());
      const data = await fs.readFile(path.join(base, "log.txt"), {
        encoding: "utf8",
      });
      console.log(data);
    } else {
      await fs.mkdir(base);
      await fs.writeFile(path.join(base, "log.txt"), process.argv[2] ?? "");
    }
  } catch (error) {
    console.log(" error", error);
  }
}

start();
