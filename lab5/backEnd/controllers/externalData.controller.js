const express = require("express");
const axios = require("axios");
const User = require("../models/user.model");

const router = express.Router();

router.get("/fetch-users", async (req, res) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data.map(({ name, address }) => ({
        fullName: name,
        address: address.street,
        registrationDate: new Date(),
    }));

    await User.bulkCreate(users);
    res.json({ message: "Users saved successfully" });
});

module.exports = router;
