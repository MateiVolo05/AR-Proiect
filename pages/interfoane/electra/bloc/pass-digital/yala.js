import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon, useColorMode } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Nav from "../../../../../components/Navbar";
import Image from 'next/image'
import yala from "../../../../../public/yala.png"
import yalaBg from "../../../../../public/yala-bg.png"

export default function Yala(){
    const { colorMode, toggleColorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    return (
        <Nav title="Yala Electromagnetica">
            <Box className="product">
                <Center><Heading fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text" textAlign="center">Yala Electromagnetica De Curent Continuu, Negru</Heading></Center>
                <Center pt={24} pl={8} pr={8}>
                    {
                        colorMode==="light"? 
                            <Image src={yala} alt="Yala" width="500vh" height="600vh" /> :
                            <Image src={yalaBg} alt="Yala" width="500vh" height="600vh" />
                    }
                </Center>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Caracteristici</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />12VC.C./0,7AC.C.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Carcasa Poliamida Cu Fibra De Sticla
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Montaj Aparent
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Nav>
    )
}