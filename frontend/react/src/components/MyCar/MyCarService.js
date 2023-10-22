import React from "react";
import axios from "axios";

const MyCarService = {
    fetchCars: async function () {
        try {
            const response = await axios.get('http://localhost/api/car');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    deleteCar: async function(carId){
        try {
            return await axios.delete('http://localhost/api/car/'+carId);
        } catch (error) {
            console.error(error);
            return error.status;
        }
    }
};

export default MyCarService;