const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.log(err.message);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.sendStatus(404);

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json("wrong password");
    }
    const { name, id } = user;
    res.status(200).json({ name, id });
  } catch (error) {
    res.status(500).json("error");
    console.log(error.message);
  }
});

module.exports = router;
