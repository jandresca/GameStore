const mongoose = require("mongoose");


const saleSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.ObjectId, ref: "product" },
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
    price: 0,
    date: { type: Date, default: Date.now }
})

const sale = mongoose.model("sale", saleSchema);
module.exports = sale;