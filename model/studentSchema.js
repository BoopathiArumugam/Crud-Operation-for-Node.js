    const mongoose=require("mongoose");

    const Studentschema= new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        roleno:{
            type:String,
            required:true,
        },
        registerno:{
            type:String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        mobileno:{
            type:String,
            required:true,
        },
    })

    module.exports=mongoose.model('Studentschema',Studentschema,'Studentschema');