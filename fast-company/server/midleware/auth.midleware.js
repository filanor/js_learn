const tokenService = require("../services/token.service");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    //Bearer dsafadfgsgdfjdfgjdfg
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = tokenService.validateAccess(token);
    if (!data) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log("Decoded", data);
    req.user = data;

    next();
  } catch (e) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
