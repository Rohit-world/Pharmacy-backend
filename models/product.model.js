const mongoose = require("mongoose");
const ProductScema = mongoose.Schema({
 img1:String,
 title:String,
 mrp:Number,
 strike:Number,
 discount:Number
});
const ProductModel = mongoose.model("products", ProductScema);
module.exports = { ProductModel};
