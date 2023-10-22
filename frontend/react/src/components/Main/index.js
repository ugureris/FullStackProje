import React from "react";
import MainService from "./MainService";
import { useNavigate } from "react-router-dom";


function Main(){
    const navigate = useNavigate();
    MainService.isAuthenticated().then(function (response) {
        navigate(response?'/mainPage':'/login');
    })
}

export default Main;
