const studentSchema = require("../model/studentSchema");

exports.getAllStudent=async(req,res)=> {
    await studentSchema
     .find()
     .then((doc)=>{res.status(201).send({StudentsDetails:doc});})
     .catch((err)=>{res.status(503).res.send(err)})
}

exports.getstudentById = async (req,res) => {
    await studentSchema
    .findById(req.params.id)
    .then((doc)=>{res.status(201).res.send(doc)})
    .catach((err)=>{res.status(500).res.send(err)})
}

exports.create = async (req,res) => {
    let {name,roleno,registerno,age,mobileno}=req.body;
    
    let studentData={
        name:name,
        roleno:roleno,
        registerno:registerno,
        age:age,
        mobileno:mobileno,
    };
    let data = await studentSchema(studentData)
      .save()
      .then((doc)=>{res.status(201).send(doc)})
      .catch((err)=>{res.status(502).res.send(err)})
};

exports.updateStudentById = async (req,res) => {
    let {name,roleno,registerno,age,mobileno}=req.body;
    
    let studentData={
        name:name,
        roleno:roleno,
        registerno:registerno,
        age:age,
        mobileno:mobileno,
    };
    await studentSchema
    .findByIdAndUpdate(req.param.id ,studentData)
    .then((doc)=>{res.status(201).res.send(doc)})
    .catch((err)=>{res.status(500).res.send(err)});
};

exports.deleteStudentById = async (req,res) => {
    await studentSchema
    .findByIdAndDelete(req.params.id)
    .then((doc)=>{res.status(201).res.send(doc)})
    .catch((err)=>{res.status(500).res.send(err)})
};