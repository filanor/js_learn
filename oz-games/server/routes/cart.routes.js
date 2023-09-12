const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router({ mergeParams: true });

router.get("/userId", (req, res) => {
  try {
    const userId = req.params;
    const cart = Cart.findOne({ userId });
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

module.exports = router;
