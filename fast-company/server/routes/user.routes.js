const express = require("express");
const User = require("../models/User");
const auth = require("../midleware/auth.midleware");
const router = express.Router({ mergeParams: true });

// Изменение пользователя
router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    // Проверяем является ли редактируемая страница страницуй залогиненого пользователя
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

// Получение всех пользователей
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

module.exports = router;
