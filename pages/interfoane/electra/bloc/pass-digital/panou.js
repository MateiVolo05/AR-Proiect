import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Nav from "../../../../../components/Navbar";
import Image from 'next/image'
import panou from "../../../../../public/panou-pass-digital.png"

export default function Panou(){
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    return (
        <Nav title="Panou Audio Pass Digital">
            <Box className="product">
                <Center><Heading textAlign="center" fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Panou Audio Pass Digital - Blocuri, Montaj Aparent, Inox</Heading></Center>
                <Center pt={24} pl={8} pr={8}><Image src={panou} alt="Panou Audio" width="500vh" height="600vh" /></Center>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Descriere</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Produsele din gama PASS Digital realizeaza o combinatie optima de functiuni, in scopul de a asigura un plus de siguranta si confort, precum si o interfata prietenoasa. Robuste si rezistente, toate elementele acestei game de produse sunt usor de instalat si simplu de utilizat.</Text>
                        <Text>Carcasa din INOX si display-ul electronic al listei de locatari  asigura un design modern pentru panoul audio PASS Digital, care inspira rezistenta si fiabilitate. Cititorul RFID incorporat permite accesul usor si confortabil in imobil, prin intermediul unui tag sau card de proximitate.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Functiuni</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                    <List>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Apel, convorbire si acordarea accesului
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Acces cu tag/ card RFID
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Montaj aparent si instalare usoara
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Display electronic pe patru randuri al listei de locatari
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Tastatura iluminata
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Conectare PLUG&PLAY
                        </ListItem>
                        <ListItem pb={2}>
                            <ListIcon as={ArrowForwardIcon} color={color1} />Posibilitate de conectare a max. 3 panouri aditionale
                        </ListItem>
                    </List>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Caracteristici Tehnice</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Max. 255 de apartamente
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Dimensiune: 283 x 126 x 43 mm
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Greutate: 0.93 kg
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Carcasa fata din INOX + carcasa spate din poliamida cu fibra de sticla
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Display electronic cu 4 randuri x 16 caractere
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Butoane tastatura din material plastic, semitransparent
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Montaj aparent (pe suprafata)
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Conectare PLUG&PLAY
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Tensiunea de functionare: 12 - 14 Vc.c. de la sursa de alimentare a instalatiei
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Gama temperaturilor de functionare: - 20°C ... +40°C
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Nav>
    )
}