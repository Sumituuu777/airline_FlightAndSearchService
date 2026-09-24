const { where } = require("sequelize");
const {City}=require("../models/index")

class CityRepository{
    async createCity(name){
        try {
            const city=await City.create(name);
            return city;
        } catch (error) {
            console.log("error in repo:-");
            throw {error}
        }
    }
    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        } catch (error) {
            console.log("error in repo:-");
            throw {error}
        }
    }
    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId)
            return city;
        } catch (error) {
            console.log("error in repo:-");
            throw {error}
        }
    }
    async updateCity(cityId,data){ //data is a object containing only the keys:values which you 
        try {                      // want to update ex {name:prayagraj}
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        } catch (error) {
            console.log("error in repo:-");
            throw {error}
        }
    }
}
module.exports=CityRepository;