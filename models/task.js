const moongoose = require('mongoose')

const TaskSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        maxlength:20
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = moongoose.model('Task', TaskSchema)