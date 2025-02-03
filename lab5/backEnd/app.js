const express = require("express");
const sequelize = require("./connection/database");
const userRoutes = require("./controllers/user.route");
const productRoutes = require("./controllers/product.route");
const shoppingCartRoutes = require("./controllers/shoppingCart.route");
const emailRoutes = require("./controllers/email.route");
const imageRoutes = require("./controllers/image.route");
const externalDataRoutes = require("./controllers/externalData.route");
const cors = require('cors')

// app.use(cors({ origin: process.env.CLIENT_URL, methods: ['GET', 'POST', 'PUT', 'DELETE'] }));

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", shoppingCartRoutes);
app.use("/email", emailRoutes);
app.use("/images", imageRoutes);
app.use("/external", externalDataRoutes);

sequelize.sync().then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
});
