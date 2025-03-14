//It is a middleware that is used to check whether the schema given by zod (signupSchema) is valid or not 
const validate = (schema) => async(req,res,next)=>{     
    try {
        const ParsedBody = await schema.parseAsync(req.body);
        req.body=ParsedBody;
        next()
    }
    catch(err){
        console.log(err);
        const status=422;
        const message="Please fill the field";
        const extraMessage=err.errors[0].message;

        const error={
            status,
            message,
            extraMessage
        }

        console.log(error)
        next(error)
    }
};

module.exports = validate;