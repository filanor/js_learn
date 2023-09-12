const express = require("express");
const router = express.Router({ mergeParams: true });
const Order = require("../models/Order");
const auth = require("../midleware/auth.midleware");

router.get("/", auth, async (req, res) => {
  try {
    const list = await Order.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const order = await Order.create({ ...req.body });
    res.status(200).send(order);
  } catch (error) {
    res.status(500).json({
      message: `На сервере произошла ошибка. Попробуйте позже: ${error.message}`
    });
  }
});

module.exports = router;

/*
{
  userId: "64f8fbab468943bc0ee30f08",
  products: [
    {product: "64fe28f73a068330bfd68828", quantity: 10, price: 2300}
  ], 
  adress: {
    country: "Россия",
    street: "Моросейка 3к2"
  },
  status: "new"

}
*/
