const {Schema,model} = require("mongoose")

const ServiceSchema = Schema({
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
})

const service = new model("service",ServiceSchema)

module.exports = service;