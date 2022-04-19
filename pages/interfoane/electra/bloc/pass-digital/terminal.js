import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Nav from "../../../../../components/Navbar";
import Image from 'next/image'
import terminal from "../../../../../public/terminal-pass-digital.png"

export default function Terminal(){
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    return (
        <Nav title="Terminal Audio Pass Digital">
            <Center><Heading fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Terminal Audio Pass Digital, Alb</Heading></Center>
            <Center pt={24} pl={8} pr={8}><Image src={terminal} alt="Terminal Audio" width="500vh" height="600vh" /></Center>
            <Box pl={4} pt={8} color={colormode}>
                <Heading fontSize={["lg",, "3xl"]}>Descriere</Heading>
                <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                    <Text>Produsele din gama PASS Digital realizeaza o combinatie optima de functiuni, in scopul de a asigura un plus de siguranta si confort. Robuste si rezistente, toate elementele acestei game de produse sunt usor de instalat si simplu de utilizat.</Text>
                    <Text>Terminalul audio PASS Digital are un design simplu si curat, usor de integrat in mediile interioare. Utilizarea este extrem de facila, prin numai doua taste principale si o tasta cu dubla functionalitate – reglare volum si inchidere terminal.</Text>
                </Box>
            </Box>
            <Box pl={4} pt={8} color={colormode}>
                <Heading fontSize={["lg",, "3xl"]}>Functiuni</Heading>
                <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                <List>
                    <ListItem pb={2}>
                        <ListIcon as={ArrowForwardIcon} color={color1} />Interactiunea cu vizitatorii prin convorbire semi-duplex, fara receptor
                    </ListItem>
                    <ListItem pb={2}>
                        <ListIcon as={ArrowForwardIcon} color={color1} />Acordarea accesului vizitatorilor
                    </ListItem>
                    <ListItem pb={2}>
                        <ListIcon as={ArrowForwardIcon} color={color1} />Buton de reglare a volumului in 2 trepte si inchis (mut)
                    </ListItem>
                    <ListItem pb={2}>
                        <ListIcon as={ArrowForwardIcon} color={color1} />Posibilitate de conectare a max. 3 terminale aditionale
                    </ListItem>
                </List>
                </Box>
            </Box>
            <Box pl={4} pt={8} color={colormode}>
                <Heading fontSize={["lg",, "3xl"]}>Caracteristici Tehnice</Heading>
                <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                    <List>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Dimensiune: 181 x 91 x 35 mm
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Greutate: 0.21 kg
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Montaj aparent (pe suprafata)
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Conectori cu surub (rigleta)
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Tensiunea de functionare: 12 - 14 Vc.c. de la sursa de alimentare a instalatiei
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Gama temperaturilor de functionare: 0 ... +45°C
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Nav>
    )
}