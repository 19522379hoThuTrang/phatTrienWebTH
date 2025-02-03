const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy danh sách sản phẩm" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, price, manufacturingDate } = req.body;
        const newProduct = await Product.create({ name, price, manufacturingDate });
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi thêm sản phẩm" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { name, price, manufacturingDate } = req.body;
        await Product.update({ name, price, manufacturingDate }, { where: { id: req.params.id } });
        res.json({ message: "Cập nhật sản phẩm thành công" });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi cập nhật sản phẩm" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } });
        res.json({ message: "Xóa sản phẩm thành công" });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi xóa sản phẩm" });
    }
});

module.exports = router;
