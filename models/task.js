const moongoose = require('mongoose')

const TaskSchema = new moongoose.Schema({
    name: String,
    completed: Boolean,
})

module.exports = moongoose.model('Task', TaskSchema)