const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json({ message: "welcome from the portal router" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
