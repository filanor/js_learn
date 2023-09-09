const Profession = require("../models/Profession");
const Qualities = require("../models/Quality");
const professionsMock = require("../mock/professions.json");
const qualitiesMock = require("../mock/qualities.json");

module.exports = async () => {
  const professions = await Profession.find(); // получаем все записи из бд
  if (professions.length !== professionsMock.length) {
    await createInitialEntityes(Profession, professionsMock);
  }

  const qualities = await Qualities.find(); // получаем все записи из бд
  if (qualities.length !== qualitiesMock.length) {
    await createInitialEntityes(Qualities, qualitiesMock);
  }
};

async function createInitialEntityes(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
