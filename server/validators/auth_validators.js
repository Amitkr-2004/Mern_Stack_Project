const {z} = require("zod");

const signUpSchema=z.object({
    username:z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"UserName must be of Atleast 3 characters "})
    .max(50,{message:"UserName should be of Maximum of 50 characters"}),

    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .min(3,{message:"Email must be of 3 characters"})
    .max(50,{message:"Email of maximum 50 characters is allowed"}),

    phone:z
    .string({required_error:"Phone Number is Required"})
    .trim()
    .min(10,{message:"Phone must be of Minimimum 10 numbers"})
    .max(50,{message:"Phone must be of Maximum of 50 numbers"}),

    password:z
    .string({required_error:"Password is Required"})
    .trim()
    .min(8,{message:"Password must be of Atleast 8 characters"})
    .max(50,{message:"Password must be of Maximum of 50 characters"}),
})

const LoginInSchema=z.object({
    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .min(3,{message:"Email must be of 3 characters"})
    .max(15,{message:"Email of maximum 15 characters is allowed"}),

    password:z
    .string({required_error:"Password is Required"})
    .trim()
    .min(8,{message:"Password must be of Atleast 8 characters"})
    .max(20,{message:"Password must be of Maximum of 20 characters"})

})

module.exports={signUpSchema,LoginInSchema};