const Author =require("../models/author.model")

module.exports.testRoute = (req,res) => {
    res.json({message:"hi controle"});
}
module.exports.getAll=(req,res)=>{
    Author.find({})
        .then(results=> res.json(results))
        .catch(err=>res.status(400).jason({message:"that didnt work",err}))
}
module.exports.create=(req,res)=>{
    Author.create(req.body)
    .then(results=> res.json(results))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.getOne = (req,res)=>{
    Author.findOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.deleteOne=(req,res)=>{
    Author.deleteOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"that didnt work",err}))
}
module.exports.updateOne=(req,res)=>{
    Author.updateOne({_id:req.params._id},req.body,{runValidators:true})
    .then(result=>res.json(result))
    .catch(err=> res.status(400).json({message:"thats didnt wor",err}))
}

module.exports.randomAuthor=(req,res)=>{
    Author.aggregate().sample(1)
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json({message:"thst didnt work",err}))
}