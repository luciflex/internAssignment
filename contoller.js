const userModel=require("./model");

async function createUser(req,res){
    try{
        const user=await userModel.create(req.body);
        console.log(user);
        res.status(201).json({
            Status:"new user added",
            user:user
        })
    }catch(err){
        res.status(400).json({
            status:err.message
        })
    }
}

async function getUser(req,res){
    try{
        const users=await userModel.find({});
        console.log(users);
        res.status(200).json({
            status:"Users list fetched successfully",
            users:users
        })
    }catch(err){
        res.status(400).json({
            status:err.message
        })
    }

}

function addPage(req,res){
    res.sendFile("./public/add.html",{root:__dirname});
}
function listPage(req,res){
    res.sendFile("./public/list.html",{root:__dirname});
}

module.exports.createUser=createUser;
module.exports.getUser=getUser;
module.exports.addPage=addPage;
module.exports.listPage=listPage;