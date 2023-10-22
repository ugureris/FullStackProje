import React from "react";
import axios from "axios";

const EditCarService = {
    fetchCar: async function(id){
        try {
            const response =await axios.get('http://localhost/api/car/'+id, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    getBrands: async function(){
        try {
            const response =await axios.get('http://localhost/api/car/brands', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    getModels: async function(brandId){
        try {
            const response =await axios.get('http://localhost/api/car/brands/'+brandId, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    updateCar: async function(carModel){
        try {
            return await axios.put('http://localhost/api/car/update',
                carModel, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
        } catch (error) {
            console.error(error);
            return null;
        }
    },
};

export default EditCarService;