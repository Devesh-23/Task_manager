const express = require("express");
const app = express();
const task = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.json())

//routing 
app.get('/hello', (req, res) =>{
    res.send("my first req from ther server");
})

app.use('/api/v1/tasks', task)
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