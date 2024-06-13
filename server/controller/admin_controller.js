const User=require("../models/user_models")
const Contact=require("../models/Contact_models")

/*
    Users Data
*/

const getAllUsers = async(req,res) =>{
    try{
        const response=await User.find()
        .select({password:0});
        console.log(response);
        if(!response || response.length===0){
            return res.status(404).json(response);
        }
        return res.status(201).json(response)
    }
    catch(err){
        console.log(err)
    }
}

/*
    Delete Data
*/
const deleteById = async(req,res) =>{
    try{
        const id=req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({message:"User Deleted Successfully"})
    }
    catch(err){
        next(err)
    }
}

/*
    Update Data
*/
const getUserByID = async(req,res) =>{
    try{
        const id=req.params.id;
        const data = await User.findOne({_id:id},{password:0})
        return res.status(200).json(data)
    }
    catch(err){
        next(err)
    }
}

/*
    Update User By ID
*/

const UpdateUserByID = async(req,res) =>{
    try{    
        const id=req.params.id;
        const UpdatedData=req.body;
        const data=await User.updateOne({_id:id},{
            $set:UpdatedData
        })
    return res.status(200).json(data)
    }
    catch(err){
        console.log(err)
    }
}

/*
    Contact Data
*/

const getAllContact = async(req,res) =>{
    try{
        const response=await Contact.find();
        console.log(response);
        if(!response || response.length===0){
            return res.status(404).json(response);
        }
        return res.status(201).json(response)
    }
    catch(err){
        console.log(err)
    }
}

/*
    Delete Data
*/
const deleteContactById = async(req,res) =>{
    try{
        const id=req.params.id;
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:"Contact Deleted Successfully"})
    }
    catch(err){
        next(err)
    }
}

module.exports = {getAllUsers,getAllContact,deleteById,getUserByID,UpdateUserByID,deleteContactById};