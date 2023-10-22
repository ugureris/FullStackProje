import React from "react";
import axios from "axios";

const LoginService = {
    authenticate: async function (username,password) {
        try {
            return await axios.post('http://localhost/api/login', {
                username: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export default LoginService;