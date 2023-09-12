const axios = require("axios");
const { parseString } = require("xml2js");
const config = require("config");

async function getBGGID(title) {
  const response = await axios.get(
    `${config.get("bggApiSearch")}${title}&exact=1`
  );

  // Преобразовать XML в объект JavaScript
  let parsedData;
  parseString(response.data, (err, result) => {
    if (err) {
      throw err;
    }
    parsedData = result;
  });

  // Извлекаем нужные значения
  const objectid = parsedData.boardgames.boardgame[0].$.objectid;
  const yearpublished = parsedData.boardgames.boardgame[0].yearpublished[0];

  return { id: objectid, year: yearpublished };
}

module.exports = {
  getBGGID
};
