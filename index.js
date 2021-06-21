const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require('path');

//Connect DB
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
}).then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err));


app.use(cors())
app.use(express.json())
app.use('/auth',require('./routes/auth'))
app.use('/api/resources', require('./routes/resource'));

//Changes for deploying site
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    //to load index.html inside our build folder
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));