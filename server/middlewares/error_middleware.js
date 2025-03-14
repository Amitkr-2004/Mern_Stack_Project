const errorMiddleware = (err,req,res,next) =>{
    const status = err.status || 500;
    const message=err.message || "Backend Error";
    const extraMessage=err.extraMessage || "Error from Backend";

    return res.status(status).send({message,extraMessage});
    
} ;

module.exports = errorMiddleware