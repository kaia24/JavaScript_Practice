const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/author",{ 
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>console.log("youre connected to the db"))
.catch(err=>console.log("cant connect to db ripp", err))
