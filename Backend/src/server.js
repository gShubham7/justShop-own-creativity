const express = require("express");

require("dotenv").config();
const connect = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

const AuthRoute = require("./routes/auth.router");
const MenRoute = require("./routes/mens.router");
const WomenRoute = require("./routes/womens.router");
const ElectronicRoute = require("./routes/electronics.router");
const CartRoute = require("./routes/cart.router");
const UsersRoute = require("./routes/users.router");
const cartsRoute = require("./routes/carts.router");

app.use("/auth", AuthRoute);
app.use("/mens", MenRoute);
app.use("/womens", WomenRoute);
app.use("/electronics", ElectronicRoute);
app.use("/cart", CartRoute);
app.use("/users", UsersRoute);
app.use("/carts", cartsRoute);

app.listen(PORT, async () => {
  await connect();
  console.log(`listen at http://localhost:${PORT}`);
});
