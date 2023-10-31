const mongoose = require("mongoose");
const JokesSchema = new mongoose.Schema({
    setup :{
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[3,'{PATH} must be atleast {MINLENGTH} charcaters']
    },
    punchline :{
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[3,'{PATH} must be atleast {MINLENGTH} charcaters']
    },
}, {timestamps:true})
const Jokes =mongoose.model("Jokes", JokesSchema);

module.exports=Jokes; 