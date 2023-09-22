const express = require('express')
const newApp = express()
const route = require('./route')
require('./database')
const port = 8000 ;

newApp.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  newApp.use(route);
newApp.use(express.json())

newApp.listen(port,()=>{
    console.log('listening on port :8000')
})