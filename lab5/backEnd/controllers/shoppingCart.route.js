const express = require("express");
const ShoppingCart = require("../models/shoppingCart.model");
const User = require("../models/user.model");
const Product = require("../models/product.model");

const router = express.Router();

router.get("/:userId", async (req, res) => {
    try {
        const cartItems = await ShoppingCart.findAll({
            where: { userId: req.params.userId },
            include: [{ model: Product, attributes: ["name", "price"] }],
        });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy giỏ hàng" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const existingItem = await ShoppingCart.findOne({ where: { userId, productId } });

        if (existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
            res.json(existingItem);
        } else {
            const newItem = await ShoppingCart.create({ userId, productId, quantity });
            res.json(newItem);
        }
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi thêm sản phẩm vào giỏ hàng" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { quantity } = req.body;
        await ShoppingCart.update({ quantity }, { where: { id: req.params.id } });
        res.json({ message: "Cập nhật số lượng sản phẩm trong giỏ hàng thành công" });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi cập nhật giỏ hàng" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await ShoppingCart.destroy({ where: { id: req.params.id } });
        res.json({ message: "Xóa sản phẩm khỏi giỏ hàng thành công" });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi xóa sản phẩm khỏi giỏ hàng" });
    }
});

module.exports = router;
