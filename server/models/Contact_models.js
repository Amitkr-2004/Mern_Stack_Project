const {Schema,model} = require('mongoose')

const ContactSchema=new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

const Contact=new model("Contact",ContactSchema)

module.exports=Contact