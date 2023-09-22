const mongoose = require('mongoose');
const DB = "mongodb+srv://Vishal:vishal@vishalrawat.m0jxh57.mongodb.net/Unesco" ;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('Database Connection established'))
.catch((error)=>console.log(error.message))