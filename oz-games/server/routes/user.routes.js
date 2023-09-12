const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router({ mergeParams: true });
const auth = require("../midleware/auth.midleware");

// Изменение пользователя
router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    if (userId) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true
      });
      res.send(updatedUser); // Если статус 200, то можно не указывать его явно.
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

module.exports = router;
