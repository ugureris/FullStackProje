import {Button, Center, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import {MdFolder, MdHome} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import React from "react";


function SideMenu() {
    const navigate = useNavigate();

    return (<Center
        w="300px"
        height={"100vh"}
        bg="white"
        pt={5}
        alignItems={"start"}
        display={"grid"}
        gridTemplateColumns={200}
        gridGap={10}
    >
        <UnorderedList listStyleType="none" color={"black"}>
            <Text
                color={"gray"}
                fontWeight={"bold"}
                fontSize={25}
                mt={0}
                pt={0}
            >
                UGUR-Cars
            </Text>
            <ListItem>
                <Button
                    leftIcon={<MdHome />}
                    mt={5}
                    colorScheme="black"
                    variant="ghost"
                    borderRadius={0}
                    _hover={{ bg: "#ebedf0" }}
                    _focus={{ bg: "#ebedf0" }}
                    onClick={() => navigate('/mainPage')}
                >
                    Home
                </Button>
            </ListItem>
            <ListItem>
                <Button
                    leftIcon={<MdFolder />}
                    mt={5}
                    colorScheme="black"
                    variant="ghost"
                    borderRadius={0}
                    _hover={{ bg: "#ebedf0" }}
                    _focus={{ bg: "#ebedf0" }}
                    onClick={() => navigate('/account')}
                >
                    Change Password
                </Button>
            </ListItem>
        </UnorderedList>
    </Center>)
}

export default SideMenu;