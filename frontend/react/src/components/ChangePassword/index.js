import React, {useState} from "react";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Box,
  Button,
  ButtonGroup,
  Text, useToast,
} from "@chakra-ui/react";
import {MdSave} from "react-icons/md";
import SideMenu from "../HelperComponents/SideMenu";
import {useNavigate} from "react-router-dom";
import ChangePasswordService from "./ChangePasswordService";

function ChangePassword() {
  const toast = useToast();
  const navigate = useNavigate();
  const [oldPass,setOldpass] = useState([]);
  const [newPass,setNewpass] = useState([]);
  const [renewPass,setRenewpass] = useState([]);

  let handleOldPassChange = (e) =>{
    setOldpass(e.target.value);
  }
  let handleNewPassChange = (e) =>{
    setNewpass(e.target.value);
  }
  let handleRenewPassChange = (e) =>{
    setRenewpass(e.target.value);
  }
  let changePass=()=>{
    if (!oldPass || !newPass || !renewPass){
      {toast({
        title: 'Hata',
        description: "Lütfen tüm şifreleri girin.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })}
    }
    else if (newPass !== renewPass){
      {toast({
        title: 'Hata',
        description: "Yeni şifreleriniz örtüşmemektedir.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })}
    }
    else{
      ChangePasswordService.changePassword(oldPass,newPass).then(function (response) {
        console.log(response);
        if(response.status && response.status== 406){
          {toast({
            title: 'Hata',
            description: "Mevcut şifreniz hatalıdır.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })}
        }
        else if(response.status == 200){
          {toast({
            title: 'Başarılı',
            description: "Şifreniz başarıyla güncellenmiştir",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })}
          navigate('/mainPage');
        }
        else{
          {toast({
            title: 'Hata',
            description: "Bilinmeyen bir hata meydana geldi.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })}
          navigate('/mainPage');
        }
      })
    }
  }


  return (
    <div>
      <Flex color="black">
        <SideMenu/>
        <Box w="400px" bg="#f0f0f0">
          <Text p={5} color={"black"} fontSize={"40"} fontWeight={"bold"}>
            Change Password
          </Text>
          <FormControl
            ml={250}
            mt={100}
            pb={5}
            justifyContent={"center"}
          >
            <FormLabel color={"black"}>Old Password</FormLabel>
            <Input mb={5} variant="flushed" placeholder="Old Password" value={oldPass} onChange={handleOldPassChange} />
            <FormLabel color={"black"}>New Password</FormLabel>
            <Input mb={5} variant="flushed" placeholder="New Password" value={newPass} onChange={handleNewPassChange}/>
            <FormLabel color={"black"}>New Password Repeat</FormLabel>
            <Input variant="flushed" placeholder="New Password Repeat" value={renewPass} onChange={handleRenewPassChange} />
          </FormControl>
          <ButtonGroup gap="4" ml={100}>
            <Button colorScheme="blue" variant="ghost" borderRadius={0} onClick={() => navigate('/mainPage')}>
              Cancel
            </Button>
            <Button
              righticon={<MdSave />}
              colorScheme="blue"
              variant="solid"
              borderRadius={0}
              onClick={changePass}
            >
              Save
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
}

export default ChangePassword;
