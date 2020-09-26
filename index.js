const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// load env files
dotenv.config({path:'./config/config.env'});

// connect to database
connectDB();

const app = express();
app.use(express.json())

// import routes
const note = require('./routers/notes');

// mount routes
app.use('/api/notes',note);

// port
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))

// handle unhandle rejections
process.on('uncaughtExceptionMonitor',(err, promise)=>{
    console.log(`Error: ${err.message}`)
    // close server and exit process
    server.close(()=>process.exit(1))
})