import React from "react";
import axios from "axios";

const ChangePasswordService = {
    changePassword: async function(oldPass,newPass){
        try {
            return await axios.post('http://localhost/api/user/changePass', {
                oldPassword: oldPass,
                password: newPass
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        } catch (error) {
            return error.response;
        }
    },
    deleteAccount: async function(){},
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

export default ChangePasswordService;