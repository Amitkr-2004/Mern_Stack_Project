const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})

//Hashing the password
UserSchema.pre("save",async function(next){
    const user=this;

    if(!user.isModified('password')){
        next();
    }

    try{
        const saltRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }
    catch(error){
        next(error);
    }
})
//Compare the password

UserSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password);
}


//json web token

UserSchema.methods.generateToken = async function(){
try{
    return jwt.sign({                   //payload->used to identify user in frontend
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin
    },
    process.env.SECRET_KEY,{              //signatue is used to verify user at server side
        expiresIn:'30d'
    }
);
}
catch(err){
    console.log(err);
}
}


//define model name or collection name

const User=new mongoose.model("User",UserSchema);

module.exports=User;