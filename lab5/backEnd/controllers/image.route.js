const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), (req, res) => {
    res.json({ imagePath: `/uploads/${req.file.filename}` });
});

router.get("/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, "../uploads", req.params.filename));
});

module.exports = router;
