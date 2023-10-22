import React from "react";
import axios from "axios";

const MainService = {
    isAuthenticated: async function () {
        try {
            const response = await axios.get('http://localhost/api/user/isLoggedIn',);
            return response.data;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export default MainService;