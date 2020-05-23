const express=require("express");
const router=express.Router();
const{getUser,createUser,addPage,listPage}=require("./contoller");

router.route("/user").get(getUser)
router.route("/adder").post(createUser);

router.route("/add").get(addPage);
router.route("/list").get(listPage);

module.exports=router;