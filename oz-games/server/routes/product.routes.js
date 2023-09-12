/**
 * TODO: Добавить проверку, что бы изменять и создать мог только админ
 */

const express = require("express");
// const { check, validationResult, body } = require("express-validator");
const config = require("config");
const Product = require("../models/Product");
const { getBGGID } = require("../utils/bgg");
const router = express.Router({ mergeParams: true });
const auth = require("../midleware/auth.midleware");

// Создаем новый товар
router.post("/", auth, async (req, res) => {
  try {
    const { title, bgg } = req.body;

    const bggId = bgg ? bgg : (await getBGGID(title)).id;

    const newProduct = await Product.create({
      ...req.body,
      bgg: bggId
    });
    res.status(201).send({ id: newProduct._id });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
      error: error.message
    });
  }
});

// Получаем все товары
router.get("/", async (req, res) => {
  try {
    const list = await Product.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

//=== обработка товара по ID
router
  .route("/:id")
  // получаем
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const prod = await Product.findById(id);
      res.status(200).send(prod);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      });
    }
  })

  // Извеняем
  .patch(auth, async (req, res) => {
    try {
      const { id } = req.params;

      const updatedProd = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      });
      res.send(updatedProd);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      });
    }
  })

  // Удаляем
  .delete(auth, async function (req, res) {
    try {
      const { id } = req.params;
      const removedProduct = await Product.findById(id);

      if (req.user.isAdmin) {
        await removedProduct.delete();
        return null;
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      });
    }
  });

module.exports = router;
