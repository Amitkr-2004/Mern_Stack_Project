const express=require("express");
const User=require("../models/user_models");
const bcrypt=require("bcrypt")


const home = async(req,res) =>{
    try{
        res.status(200).send("Hello World from controller side");
    }
    catch(err){
        res.status(400).send("Page not found")
    }
}

/*-------
---------Register---------
-------*/
const register = async(req,res) =>{
    try{
        const data=req.body;
        console.log(data);
        const {username,email,phone,password}=req.body;

        const userexist=await User.findOne({email});    //whether the given email is same or not 

        if(userexist){
            return res.status(422).json({message:"Email already exists!!"});
        }

        //Hashing the password

        const UserCreated=await User.create({username,email,phone,password});

        res.status(201).json({
            "msg":"Registered successfully",    
            "userID":UserCreated._id.toString(),
            token: await UserCreated.generateToken()    //generating the token
        });
    }
    catch(err){
        res.status(500).send("Internal Server error")
    }
}
/*-------
---------Login---------
-------*/
const login = async(req,res)=>{
    try{
        const {email,password}=req.body;

        const UserExist=await User.findOne({email});
        console.log(UserExist)
        if(!UserExist){
            return res.status(422).json({message:"User doesn't exist"});
        }

        const user=await UserExist.comparePassword(password)    //comparing the password in user_models by using function comparePassword

        if(user){
            res.status(201).json({
                msg:"Loginned successfully",    
                userID:UserExist._id.toString(),
                token: await UserExist.generateToken()    //generating the token
            });
        }
        else{
            res.status(401).json({message:"Invalid email or password"});
        }
    }
    catch(err){
        res.status(500).json("Internal Server error")
    }
}

/*-------
---------User---------
-------*/

const user = async(req,res) =>{
    try{
        const userData=req.user //Contains all our data
        console.log(userData)
        res.status(200).json({userData})
    }
    catch(err){
        res.status(400).json({msg : "Error in fething data"})
    }
}

module.exports={home,register,login,user}