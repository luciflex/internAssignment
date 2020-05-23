const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://admin:JAk0N40QPVMnumOu@cluster0-wuvtn.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}).then(function(conn){
    console.log("User DB Connected");
}).catch(function(err){
    console.log(err);
});

//user scehma

const userScehma= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    age:{type:Number,
        required:true

    },
    interest:{
        type:String,
        enum:["MALE","FEMALE","BOTH"],
        default:"BOTH"
    },
    bio:{
        type:String,
        max:[100,"Bio cannot be more than 100 words"]
    }
})

const userModel=mongoose.model("User",userScehma);
module.exports=userModel;