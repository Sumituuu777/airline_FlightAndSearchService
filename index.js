const http=require('http');
const express=require("express")
const bodyParser=require("body-parser")

const {City}=require("./src/models/index");
const CityRepository = require('./src/repository/city-repository');

const SetUpAndStartServer=async function(){

    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    const PORT=3500;
    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
        const repo=new CityRepository();
        const ans=await repo.createCity({name:"Mumbai"})
        // await City.create({
        //     name:"New Dihh"
        // })
    })
}
SetUpAndStartServer()