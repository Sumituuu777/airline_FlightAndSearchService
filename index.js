const http=require('http');
const express=require("express")
const bodyParser=require("body-parser")

const {City}=require("./src/models/index");
const CityRepository = require('./src/repository/city-repository');
const ApiRoutes=require('./src/routes/index')

const SetUpAndStartServer=async function(){

    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);

    const PORT=3500;
    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
    })
}
SetUpAndStartServer()