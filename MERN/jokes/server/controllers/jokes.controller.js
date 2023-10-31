const Jokes =require("../models/jokes.model")

module.exports.testRoute = (req,res) => {
    res.json({message:"hi controle"});
}
module.exports.getAll=(req,res)=>{
    Jokes.find({})
        .then(results=> res.json(results))
        .catch(err=>res.status(400).jason({message:"that didnt work",err}))
}
module.exports.create=(req,res)=>{
    Jokes.create(req.body)
    .then(results=> res.json(results))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.getOne = (req,res)=>{
    Jokes.findOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.deleteOne=(req,res)=>{
    Jokes.deleteOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.updateOne=(req,res)=>{
    Jokes.updateOne({_id:req.params._id},req.body,{runValidators:true})
    .then(result=>res.json(result))
    .catch(err=> res.status(400).json({message:"thats didnt wor",err}))
}