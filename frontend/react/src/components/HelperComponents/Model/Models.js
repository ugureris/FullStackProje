export const UserModel = () => {
    return {
        id:0,
        username:"",
        password:"",
        status:"active",
        role:"USER",
        firstName:"",
        lastName:"",
    }
}

export const CarObject = () =>{
    return {
        carId:0,
        carName:"",
        plateNumber:"",
        year:"",
        carBrand:{},
        carModel:{},
        user:{},
    }
}