const AdminMiddleware = async(req,res,next) =>{
    try{
        const AdminRole = req.user.isAdmin;
        if(!AdminRole){
            return res.status(403).json({message:"Access denied!! User is not a Admin"})
        }
        //If user is admin then move to next part
        next()
    }
    catch(err){
        next(err);
    }
}

module.exports=AdminMiddleware