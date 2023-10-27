const express = require("express");
const app = express();
const task = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()

const notfound = require("./middleware/not_found")


//middleware
app.use(express.static("./public"))
app.use(express.json())

//routing 
app.use('/api/v1/tasks', task)
app.use(notfound)
const port = 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listing on ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}

start()