const Service= require("../models/Service_model")

const services = async(req,res) =>{
    try{
    const response=await Service.find();
    if(!response){
        res.status(400).json({msg:"Service not Availiable"})
        return;
    }
    res.status(200).json({msg:response})
}
catch(err){
    console.log(`Services : ,${err}`)
}
}

module.exports = services