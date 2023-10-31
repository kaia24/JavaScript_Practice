const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[3,'{PATH} must be atleast {MINLENGTH} charcaters']
    },
    price: {
        type:Number,
        required:[true,'{PATH} is needed'],
        min:[.01,'{PATH} must be atleast $ {MIN} '],
        
    },
    description: {
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[2,'{PATH} must be atleast 3 charcaters']
    },
    
}, {timestamps:true})
const Product =mongoose.model("Product", ProductSchema);

module.exports=Product; 