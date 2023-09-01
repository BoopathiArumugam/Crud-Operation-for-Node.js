const express=require("express");
const studentcontroller=require("../controller.js/studentcontroller");
const router=express.Router()

router.get("/",async(req,res)=>{
await studentcontroller.getAllStudent(req,res).then().catch(err=>res.send(err))
})

router.get('/get/:id',async (req,res)=>{
    await studentcontroller.getstudentById(req,res).then().catch(err=>res.send(err))
})

router.post("/create",async(req,res)=>{
    await studentcontroller.create(req,res).then().catch(err=>res.send(err))
})

router.patch("/update/:id",async(req,res)=>{
   await studentcontroller.updateStudentById(req,res).then().catch(err=>res.send(err))
})

router.delete("/delete/:id",async(req,res)=>{
   await studentcontroller.deleteStudentById(req,res).then().catch(err=>res.send(err))
})


module.exports= router