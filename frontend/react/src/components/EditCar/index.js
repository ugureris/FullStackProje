import React from "react";
import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Box,
  Button,
  ButtonGroup,
  Text,
  Select, useToast,
} from "@chakra-ui/react";
import { MdSave } from "react-icons/md";
import SideMenu from "../HelperComponents/SideMenu";
import EditCarService from "./EditCarService";
import {CarObject} from "../HelperComponents/Model/Models"
import {useNavigate} from "react-router-dom";

function EditCar() {
  const toast = useToast();
  const navigate = useNavigate();

  let carId = window.location.pathname.split('/').reverse()[0];
  const [brandList,setBrandList] = useState([]);
  const [modelList,setModelList] = useState([]);
  const [carObject,setCarObject] = useState(CarObject);


  useEffect(() => {
    let tempCar = {};
    EditCarService.fetchCar(carId).then(function (response) {
      tempCar = response;
      console.log(tempCar);

    EditCarService.getBrands().then(function (brandResp) {
      setBrandList(brandResp);
    })
    EditCarService.getModels(tempCar.carModel.modelId).then(function (modelResp) {
      setModelList(modelResp);
      setCarObject(tempCar);
    })

    })
  }, []);

  let updateCar = () =>{
    EditCarService.updateCar(carObject).then(function (response) {
      if(response == -1) {toast({
        title: 'Hata',
        description: "Bu plakaya ait bir araç sistemimizde kayıtlıdır.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

      }
      else if(response == null){
        if(response == -1) {toast({
          title: 'Hata',
          description: "Beklenmeyen bir hata meydana geldi",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

        }
      }
      else{
        toast({
          title: 'Araba Güncellendi',
          description: "Arabanız başarıyla güncellenmiştir",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate('/mainPage');
      }
    })
  }
  let handleBrandChange = (e) => {
    EditCarService.getModels(e.target.value).then(function (response) {
      setModelList(response)
    })
    setCarObject({...carObject,
      carBrand: brandList.find(brand=>brand.brandId == e.target.value)})
  }

  let handleModelChange = (e) => {
    setCarObject({...carObject,
      carModel: modelList.find(model=>model.modelId == e.target.value)})
  }

  let handleYearChange = (e) =>{
    setCarObject({...carObject,
      year:e.target.value})
  }

  let handleNameChange = (e) =>{
    setCarObject({...carObject,
      carName:e.target.value})
  }

  let handlePlateNumberChange = (e) =>{
    setCarObject({...carObject,
      plateNumber:e.target.value})
  }

  return (
      <Flex color="white" height={"100vh"}>
        <SideMenu/>
        <Box w="400px" bg="#f0f0f0">
          <Text p={5} color={"black"} fontSize={"40"} fontWeight={"bold"}>
            Edit Car
          </Text>
          <FormControl
              ml={250}
              mt={100}
              pb={2}
              justifyContent={"center"}
          >
            <FormLabel color={"black"}>Car Name</FormLabel>
            <Input
                color={"black"}
                mb={2}
                variant="flushed"
                placeholder="Car Name"
                value={carObject.carName}
                onChange={handleNameChange}
            />
            <FormLabel color={"black"}>Plaka</FormLabel>
            <Input color={"black"} mb={2} variant="flushed" placeholder="Plaka" value={carObject.plateNumber} onChange={handlePlateNumberChange} />
            <FormLabel color={"black"}>Marka</FormLabel>
            <Select
                color={"black"}
                mb={2}
                variant="flushed"
                placeholder="Marka Seçin"
                value={carObject.carBrand.brandId}
                onChange={handleBrandChange}
            >
              {brandList.map((brand) => <option  key={brand.brandId} value={brand.brandId}>{brand.brandName}</option>)}
            </Select>
            <FormLabel color={"black"}>Model</FormLabel>
            <Select
                color={"black"}
                mb={5}
                variant="flushed"
                placeholder="Model"
                value={carObject.carModel.modelId}
                onChange={handleModelChange}
            >
              {modelList.map((model) => <option  key={model.modelId} value={model.modelId}>{model.modelName}</option>)}
            </Select>
            <FormLabel color={"black"}>Year</FormLabel>
            <Input
                color={"black"}
                type="number"
                mb={5}
                variant="flushed"
                placeholder="Year"
                value={carObject.year}
                onChange={handleYearChange}
            />
            <ButtonGroup gap="4" ml={100}>
              <Button colorScheme="blue" variant="ghost" borderRadius={0}
                      onClick={() => navigate('/mainPage')}>
                Cancel
              </Button>
              <Button
                  righticon={<MdSave />}
                  colorScheme="blue"
                  variant="solid"
                  borderRadius={0}
                  onClick={updateCar}
              >
                Save
              </Button>
            </ButtonGroup>
          </FormControl>
        </Box>
      </Flex>
  );
}

export default EditCar;
