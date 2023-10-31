const mongoose = require("mongoose");
const SundaeSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[3,'{PATH} must be atleast {MINLENGTH} charcaters']
    },
    numScoops: {
        type:Number,
        required:[true,'{PATH} is needed'],
        min:[1,'{PATH} must be atleast {MIN} scoops'],
        Max:9001
    },
    flavor: {
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[2,'{PATH} must be atleast 3 charcaters']
    },
    toppings:[String],
    whipAndCherry: {
        type:Boolean,
        default:false
    }
}, {timestamps:true})
const Sundae =mongoose.model("Sundae", SundaeSchema);

module.exports=Sundae; 