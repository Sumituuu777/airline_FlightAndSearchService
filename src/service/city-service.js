const { CityRepository} =require('../repository/index')

class CityService{

    constructor(){
        this.CityRepository=CityRepository;
    }
    async createCity(data){
        try {
            const city=await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("error in service layer");
            throw {error}
        }
    }
    async deleteCity(cityId){
        try {
            await this.CityRepository.deleteCity(cityId)
            return true;
        } catch (error) {
            console.log("error in service layer");
            throw {error}
        }
    }
    async getCity(cityId){
        try {
            const city=await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("error in service layer");
            throw {error}
        }
    }
    async updateCity(data,cityId){
        try {
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("error in service layer");
            throw {error}
        }
    }
}
module.exports=CityService;