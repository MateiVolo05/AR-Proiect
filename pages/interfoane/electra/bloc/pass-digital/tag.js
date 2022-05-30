import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon, useColorMode } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Image from 'next/image'
import tag from "../../../../../public/tag.png"
import tagBg from "../../../../../public/tag-bg.png"
import Layout from "../../../../../components/Layout";

export default function Tag(){
    const { colorMode, toggleColorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    return (
        <Layout title="Tag RFID">
            <Box className="product">
                <Center><Heading textAlign="center" fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Tag RFID Programabil, Albastru</Heading></Center>
                <Center pt={24} pl={8} pr={8}>
                    {
                        colorMode==="light"? 
                            <Image src={tag} alt="Tag RFID" width="500vh" height="600vh" /> :
                            <Image src={tagBg} alt="Tag RFID" width="500vh" height="600vh" />
                    }
                </Center>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Solutie RFID personalizata ELECTRA</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>ELECTRA si-a dezvoltat propria solutie RFID, pentru a oferi utilizatorilor cat mai multa siguranta. Cititoarele RFID integrate in panourile exterioare ELECTRA functioneaza numai cu tag-urile/ card-urile ELECTRA.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Caracteristici Tehnice</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Dimensiune: 32 x 62 x 7 mm
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Greutate: 0.007 kg
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Distanta de citire: 30 mm
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Gama temperaturilor de functionare: -30 ... +60°C
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}