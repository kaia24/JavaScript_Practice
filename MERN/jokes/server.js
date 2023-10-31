const express = require("express");
const app = express();
const port =8000;
app.use(express.json(),express.urlencoded({extended:true}));
const cors = require("cors");
app.use(cors());

// app.get("/api/test", (req,res)=>{
//     res.json({
//         message:"its workin"
//     })
// })
require("./server/config/mongoose.config");
require("./server/routes/jokes.routes")(app)


app.listen(port,()=>console.log("running!!!!!!!!!!"));