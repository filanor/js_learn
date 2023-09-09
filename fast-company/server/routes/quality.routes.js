const express = require("express");
const router = express.Router({ mergeParams: true });

const Quality = require("../models/Quality");

router.get("/", async (req, res) => {
  try {
    const quality = await Quality.find();
    res.status(200).send(quality);
  } catch (error) {
    res.status(500).json({
      message: "Н а сервере произошла ошибка. Попробуйте позже"
    });
  }
});

module.exports = router;
