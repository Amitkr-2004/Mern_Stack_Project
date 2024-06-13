const ContactSchema=require("../models/Contact_models");

const ContactForm = async(req,res) =>{
    try{
        const response=req.body;
        console.log(response)
        await ContactSchema.create(response);
        return res.status(200).json({msg:"Message sent successfully"})
    }
    catch(err){
        return res.status(500).json({msg:"Message not Delivered"})
    }
}

module.exports=ContactForm