const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  try {
    res.status(200).send({ message: "hello from item" });
  } catch (error) {}
});

module.exports = router;
