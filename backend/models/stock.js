const mongoose = require("mongoose");


const stockSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.ObjectId, ref: "product" },
    amount: 0,
    date: { type: Date, default: Date.now },
    direction: String
})

const stock = mongoose.model("stock", stockSchema);
module.exports = stock;