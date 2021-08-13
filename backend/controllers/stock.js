const Stock = require("../models/stock");
const Product = require("../models/product");

const registerStock = async (req,res) => {
    if (!req.body.amount || !req.body.direction)
    return res.status(400).send("Process failed: Incomplet data");

    let product = await Product.findOne({ name:"product" }) 
    if (!product)
    return res.status(400).send("process failed: No product was assigned");

    let stock = new Stock({
        amount: req.body.amount,
        direction: req.body.direction,
        productId: product._id
    });

    let result = await stock.save();
    if (!result) return res.status(400).send("Failed to register product");
    return res.status(200).send({ stock });

};

const listStock = async (req, res) => {
    const stock = await Stock.find().populate("productId").exec();

    if(!stock || stock.length == 0) return res.status(401).send("No stock")
    return res.status(200).send({ stock })
};

module.exports = { registerStock, listStock };