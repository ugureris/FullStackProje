import React, { useState, useEffect } from "react";

import {
  Flex,
  Box,
  Button,
  Text,
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Th,
  Tbody, useToast,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import SideMenu from "../HelperComponents/SideMenu";
import MyCarService from "./MyCarService";
import {CarObject} from "../HelperComponents/Model/Models"

function MyCar(onSearch) {
  const [carList,setCarList] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    MyCarService.fetchCars().then(function (response) {
      if (response != null) setCarList(response);
    })}, []);
  //const [query, setQuery] = useState("");
  // const handleSearch = () => {
  //   onSearch(query);
  // };

  let deleteCar = (carId) =>{
    MyCarService.deleteCar(carId).then(function (response) {
    if (response.status && response.status == "403"){
        {toast({
          title: 'Hata',
          description: "Bu işlemi gerçekleştirmeye yetkiniz yok",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })}
      }
    else if(response.status == 200){
      {toast({
        title: 'Başarılı',
        description: "Aracınız başarıyla silinmiştir.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })}
      setCarList((current) =>
          current.filter((car) => car.carId !== carId));
    }
      else{
      {toast({
        title: 'Hata',
        description: "Bilinmeyen sebeple hata meydana geldi.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })}
        }
    })
  }


  return (
    <Flex color="white" height={"100vh"}>
      <SideMenu/>

      <Box w="full" bg="#f0f0f0">
        <Text p={5} color={"black"} fontSize={"40"} fontWeight={"bold"}>
          My Cars
        </Text>
        <Box
          width={"150vh"}
          display={"flex"}
          justifyContent={"space-between"}
          borderBottom={"1px solid gainsboro"}
        >
          <Button variant={"ghost"} >Count</Button>
          <Box>
          <input
            type="text"
            placeholder="Arama yapın..."
            //value={query}
            //onChange={(e) => setQuery(e.target.value)}
          />
          </Box>
        </Box>

        <Button m={5} colorScheme="blue" variant={"outline"} borderRadius={"0"}
                onClick={() => navigate('/addCar')}>
          {" "}
          + Add New Car{" "}
        </Button>


          <TableContainer className={styles.table}>
            <Table color={"black"} variant="simple">
              <Thead className={styles.tableHeader}>

                <Tr>
                  <Th className={styles.carName} righticon={<FaEdit/>}>Car Name</Th>
                  <Th className={styles.brand}>Brand</Th>
                  <Th className={styles.model}>Model</Th>
                  <Th className={styles.year}>Year</Th>
                  <Th className={styles.plaka}>Plaka</Th>
                </Tr>
              </Thead>
              <Tbody>
                {carList.map((car)=>{
                  return (
                      <Tr key={car.carId}>
                        <Td>{car.carName}</Td>
                        <Td>{car.carBrand.brandName}</Td>
                        <Td>{car.carModel.modelName}</Td>
                        <Td>{car.year}</Td>
                        <Td>{car.plateNumber}</Td>
                        <Td>
                          <Button leftIcon={<FaEdit/>} onClick={() => navigate('/editCar/'+car.carId)}>{""}</Button>
                          <Button leftIcon={<FaTrash/>} onClick={() => deleteCar(car.carId)}>{""}</Button>
                        </Td>
                      </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
      </Box>
    </Flex>
  );
}

export default MyCar;
