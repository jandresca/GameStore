const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: 0,
    code: 0,
    description: String,
    date: { type: Date, default: Date.now },
});

const product = mongoose.model("product", productSchema);
module.exports = product;