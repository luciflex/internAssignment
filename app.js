const express=require("express");
const app=express();
app.use(express.json());

const router=require("./router");
app.use(express.static("public"));
app.use("/gogaga",router);


const port=3000||process.env.PORT;
app.listen(port,function(){
    console.log(`Server is running on port ${port}`)
})