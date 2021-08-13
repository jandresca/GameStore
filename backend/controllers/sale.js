const Sale = require("../models/sale");
const Product = require("../models/product");
const User = require("../models/user")

const registerSale = async (req,res) => {
    if (!req.body.price)
    return res.status(400).send("Process failed: Incomplet data");

    let product = await Product.findOne({ name:"product" }) 
    if (!product)
    return res.status(400).send("process failed: No product was assigned");

    let user = await User.findOne({ name:"user" }) 
    if (!user)
    return res.status(400).send("process failed: No user was assigned");

    let sale = new Sale({
        price: req.body.price,
        productId: product._id,
        userId: user._id
    });

    let result = await sale.save();
    if (!result) return res.status(400).send("Failed to register sale");
    return res.status(200).send({ sale });

};

const listSale = async (req, res) => {
    const sale = await Sale.find().populate("productId").populate("userId").exec();

    if(!sale || sale.length == 0) return res.status(401).send("No sale")
    return res.status(200).send({ sale })
};

module.exports = { registerSale, listSale };
