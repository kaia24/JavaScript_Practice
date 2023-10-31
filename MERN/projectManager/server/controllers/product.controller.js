const Product =require("../models/product.model")

module.exports.testRoute = (req,res) => {
    res.json({message:"hi controle"});
}
module.exports.getAll=(req,res)=>{
    Product.find({})
        .then(results=> res.json(results))
        .catch(err=>res.status(400).jason({message:"that didnt work",err}))
}
module.exports.create=(req,res)=>{
    Product.create(req.body)
    .then(results=> res.json(results))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.getOne = (req,res)=>{
    Product.findOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.deleteOne=(req,res)=>{
    Product.deleteOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.updateOne=(req,res)=>{
    Product.updateOne({_id:req.params._id},req.body,{runValidators:true})
    .then(result=>res.json(result))
    .catch(err=> res.status(400).json({message:"thats didnt wor",err}))
}


