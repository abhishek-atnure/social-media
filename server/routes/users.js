const router = require("express").Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { name } = user;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
