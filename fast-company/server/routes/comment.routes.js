const express = require("express");
const auth = require("../midleware/auth.midleware");
const Comment = require("../models/Comment");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  // получение списка комментов
  .get(auth, async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const comments = await Comment.find({ [orderBy]: equalTo });
      res.send({ comments });
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      });
    }
  })
  // Запись нового комментария
  .post(auth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.user._id
      });
      res.status(201).send(newComment);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      });
    }
  });

// Удаление коммента
router.delete("/:commentId", auth, async (req, res) => {
  try {
    const { commentId } = req.params;

    const removedComment = await Comment.findById(commentId);

    if (removedComment.userId.toString() === req.user._id) {
      await removedComment.delete();
      return null;
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});
module.exports = router;
