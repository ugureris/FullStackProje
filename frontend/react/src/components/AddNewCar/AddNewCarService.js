import React from "react";
import axios from "axios";

const AddNewCarService = {
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
    createCar: async function(carModel){
        try {
            const response =await axios.post('http://localhost/api/car',
                carModel, {
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

};

export default AddNewCarService;