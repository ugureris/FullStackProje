import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, InputGroup } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Link,
  InputRightElement,
} from "@chakra-ui/react";
import LoginService from "./LoginService";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = useState('ugureris');
  const [password, setPassword] = useState('ugureris');


  const handleLogin = () => {
    LoginService.authenticate(username,password).then(function (response) {
      if (response.status == 200)
        navigate("/mainPage")
      else alert('Kullanıcı adı veya şifre hatalı');
    })
  };

  return (

    <div>
      <Flex
        align="center"
        width="full"
        height={"100vh"}
        justifyContent={"center"}
      >
        <Box p={50} backgroundColor={"white"}>
          <Box textAlign="center">
            <Heading pt={100}>UGUR-Cars</Heading>
            <Heading pt={2} fontSize={18} fontWeight={600}>
              Please log in to continue
            </Heading>
            <Box pt={10} my={5} textAlign="left" width={600} borderRadius={2}>
              <form onSubmit={() => {}}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    name="username"
                    type="text"
                    backgroundColor={"#f0f0f0"}
                    borderRadius={0}
                    placeholder="Placeholder"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>

                <FormControl pt={3}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      borderRadius={0}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      backgroundColor={"#f0f0f0"}
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
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
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <hr />
                <Text
                  mt={5}
                  align="center"
                  width="full"
                  justifyContent="center"
                  fontSize={"small"}
                >
                  {" "}
                  <Link color="#1e54c0" href="#" onClick={() => navigate('/register')}>
                    No account yet? Sign Up
                  </Link>
                </Text>
              </form>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
