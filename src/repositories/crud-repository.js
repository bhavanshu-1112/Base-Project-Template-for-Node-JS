const { Logger } = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try{
         const response = this.model.create(data);
         return response;
        } catch(error){
           Logger.error('Something went wrong in the crud repo:  create');
           throw error;
        }
    }
    async destroy(data){
        try{
         const response = this.model.destroy({
            where: {
              id: data
            }
         });
         return response;
        } catch(error){
           Logger.error('Something went wrong in the crud repo:  destroy');
           throw error;
        }
    }
    async get(data){
        try{
         const response = this.model.findByPk(data);
         return response;
        } catch(error){
           Logger.error('Something went wrong in the crud repo:  get');
           throw error;
        }
    }
    async getAll(){
        try{
         const response = this.model.findAll();
         return response;
        } catch(error){
           Logger.error('Something went wrong in the crud repo:  getALl');
           throw error;
        }
    }
    async update(id, data){ // data is an object : {col: value, ...}
        try{
         const response = this.model.update(data, {
            where: {
                id : id
            }
         });
         return response;
        } catch(error){
           Logger.error('Something went wrong in the crud repo:  update');
           throw error;
        }
    }

}

module.exports = CrudRepository;