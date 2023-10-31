const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,'{PATH} is needed'],
        minlength:[3,'{PATH} must be atleast {MINLENGTH} charcaters']
    },
    
}, {timestamps:true})
const Author =mongoose.model("Author", AuthorSchema);

module.exports=Author; 