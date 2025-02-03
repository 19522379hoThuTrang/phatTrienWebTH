const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post("/", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.put("/:id", async (req, res) => {
    await User.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "User updated" });
});

router.delete("/:id", async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: "User deleted" });
});

module.exports = router;
