/**
 * TODO: Добавить проверку, что бы удалять мог только админ
 */
const express = require("express");
const router = express.Router({ mergeParams: true });
const Categoory = require("../models/Category");
const auth = require("../midleware/auth.midleware");

// получение категорий
router.get("/", async (req, res) => {
  try {
    const list = await Categoory.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

// создание категорий
router.post("/", auth, async (req, res) => {
  try {
    const newCategory = await Categoory.create(req.body);
    const allCategories = await Categoory.find();

    res.status(200).send(allCategories);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

// Удаление категорий
router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Categoory.delete(id);
    res.status(200).send(null);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

module.exports = router;
