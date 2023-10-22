import React from "react";
import { useState } from "react";
import {Alert, Button, InputGroup, useToast} from "@chakra-ui/react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  InputRightElement,
} from "@chakra-ui/react";
import {useFormik} from 'formik'
import validationSchema from './validations'
import {redirect, useNavigate} from "react-router-dom";
import {UserModel} from "../HelperComponents/Model/Models";
import SignUpService from "./SignUpService";

function SignUp() {
  const [userModel,setUserModel] = useState(UserModel);
  const toast = useToast();
  const navigate = useNavigate();
  const formik = useFormik({  
    initialValues: {
      firstName:"",
      lastName:"",
      username:"",
      password:"",
      passwordRepeat:"",
    },
    validationSchema,
    onSubmit: async(values, bag) => {
      console.log(values);
      setUserModel({id:0,
            username:values.username,
            password:values.password,
            status:"active",
            role:"USER",
            firstName:values.firstName,
            lastName:values.lastName});
      SignUpService.register(userModel).then(function (response) {
        console.log(response);
        if(response.data && response.data>0){
          toast({
            title: 'Başarılı',
            description: "Sisteme başarılı bir şekilde kaydoldunuz",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          navigate('/login');
        }
        else if(response.data && response.data===-1){
          toast({
            title: 'Hata',
            description: "Bu kullanıcı adıyla kayıtlı bir kullanıcı mevcuttur",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
        else{
          toast({
            title: 'Hata',
            description: "Bilinmeyen bir hata ile karşılaşıldı.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      })
    },
  });


  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);   
  return (
    <div className="formContainer" >
      <Flex align="center" width="full" height={"100vh"} justifyContent="center" >
        <Box p={50} backgroundColor={"white"}>
          <Box textAlign="center">
            <Heading pt={100}>UGUR-Cars</Heading>
            <Heading pt={2} fontSize={18} fontWeight={600}>
              Sign Up
            </Heading>
            
            <Box pt={10} my={5} textAlign="left" width={600} borderRadius={2}>
              <form onSubmit={formik.handleSubmit}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      backgroundColor={"#f0f0f0"}
                      borderRadius={0}
                      placeholder="First Name"
                      isInvalid={formik.touched.firstName && formik.errors.firstName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      backgroundColor={"#f0f0f0"}
                      borderRadius={0}
                      placeholder="Username"
                      isInvalid={formik.touched.lastName && formik.errors.lastName}
                  />
                </FormControl>
              <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    name="username"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    backgroundColor={"#f0f0f0"}
                    borderRadius={0}
                    placeholder="Username"
                    isInvalid={formik.touched.username && formik.errors.username}
                  />
                </FormControl>

                <FormControl pt={3}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      name="password"
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      borderRadius={0}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      backgroundColor={"#f0f0f0"}
                      placeholder="Enter password"
                      isInvalid={formik.touched.password && formik.errors.password}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl pt={3}>
                  <FormLabel>Password Repeat</FormLabel>
                  <InputGroup size="md">
                    <Input
                      name="passwordRepeat"
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur}
                      value={formik.values.passwordRepeat}
                      borderRadius={0}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      backgroundColor={"#f0f0f0"}
                      placeholder="Enter password"
                      isInvalid={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                
                <Button
                  mt={20}
                  mb={5}
                  width="full"
                  borderRadius={0}
                  colorScheme="blue"
                  type="submit"
                >
                  Sign Up
                </Button>
                <hr />
              </form>
              <Text
                mt={5}
                align="center"
                width="full"
                justifyContent="center"
                fontSize={"small"}
              >
                {" "}
                <Link color="#1e54c0" href="#" onClick={() => navigate('/login')}>
                  Have an account? Sign In
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default SignUp;
