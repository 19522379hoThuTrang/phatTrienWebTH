const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const router = express.Router();

router.post("/send", async (req, res) => {
    const { email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = { from: process.env.EMAIL_USER, to: email, subject: "Shopping Cart Notification", text: message };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent" });
    } catch (error) {
        res.status(500).json({ error: "Error sending email" });
    }
});

module.exports = router;
