const Task = require('../models/task')

const getAllTasks = (req, res) => { 
    res.send("here is th eoutput");
} 

const createTask = async (req, res) =>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getTask = (req, res) =>{
    res.json({id:req.params.id});
}

const updateTask = (req, res) =>{
    res.send("post task")
}

const deleteTask = (req, res) =>{
    res.send('delete task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask, 
    deleteTask, 
    updateTask,
}