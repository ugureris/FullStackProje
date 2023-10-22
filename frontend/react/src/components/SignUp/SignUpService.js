import React from "react";
import axios from "axios";

const SignUpService = {
    register: async function(userModel){
        try {
            return await axios.post('http://localhost/api/user',
                userModel, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
        } catch (error) {
            console.error(error);
            return error;
        }
    }

};

export default SignUpService;