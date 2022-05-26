import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon, useColorMode, HStack, Button, VStack, Stack } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Nav from "../../../../../components/Navbar";
import Image from 'next/image'
import extra from "../../../../../public/extra.png"
import extraBg from "../../../../../public/extra-bg.png"
import extraAlb from "../../../../../public/extra-alb.png"
import extraAlbBg from "../../../../../public/extra-alb-bg.png"
import { useState } from "react";

export default function Panou(){
    const { colorMode, toggleColorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const revcolormode=useColorModeValue("blackWhite.white", "blackWhite.black")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    const [color, setColor]=useState('black')
    function handleClickWhite(){
        setColor('white')
    }
    function handleClickBlack(){
        setColor('black')
    }
    return (
        <Nav title='Extra Terminal Video 7"'>
            <Box className="product">
                <Center><Heading textAlign="center" fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Extra Terminal Video 7{'"'}</Heading></Center>
                <HStack pt={24} pl={8} pr={8} justifyContent="center">
                    <Box>
                        {
                            colorMode==='light' && color==='black' ?
                                <Image src={extra} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='black' ?
                                <Image src={extraBg} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='light' && color==='white' ?
                                <Image src={extraAlbBg} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='white'?
                                <Image src={extraAlb} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                    </Box>
                    <Box alignSelf="flex-end" pb={[2,, 4]} pl={[0,, 4]}>
                        <Stack direction={['column',, 'row']}>
                            <Button bg={color2} color={revcolormode} onClick={handleClickWhite} fontSize={['xs', 'lg']}>Alb</Button>
                            <Button bg={color2} color={revcolormode} onClick={handleClickBlack} fontSize={['xs', 'lg']}>Negru</Button>
                        </Stack>
                    </Box>
                </HStack>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Design GLASS & TOUCH</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>STICLA securizata este materialul esential utilizat in realizarea produselor din gama Touch Line, ceea ce induce o eleganta minimalista si atemporala.Pe langa estetica minimalista, sticla securizata printr-un proces chimic de intarire transfera asupra produselor si alte caracteristici fundamentale: rezistenta la zgarieturi si lovituri, etanseitate, pastrarea in timp a aspectului lucios si intretinerea usoara.</Text>
                        <Text>Utilizarea tastelor TOUCH iluminate se inscrie in tendintele actuale in design si tehnologie, vizand usurinta de utilizare printr-un limbaj vizual universal valabil, cu marcaje grafice intuitive.</Text>
                        <Text>Prin aspectul compact si esentializat, terminalul video de 7” extra este o prezenta cu stil, ce se integreaza natural in orice ambianta interioara.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Asamblare inteligenta | Instalare usoara</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Solutia ELECTRA de asamblare a terminalului video de 7” extra este originala si eficienta, avand ca efect atat aspectul suplu al produsului, cat si protectia la praf si usurinta de instalare.</Text>
                        <Text>Prin imbinarea perfect stratificata a elementelor constructive, respectiv carcasa rezistenta din ABS si sticla de 3 mm securizata chimic, dublata pe verso de placa electronica de aceeasi dimensiune, rezulta un produs compact, de doar 20 mm grosime, ce se monteaza foarte facil pe orice suprafata.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Display LCD color de 7”</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Adevarul simplu este ca o imagine spune mai mult decat o mie de cuvinte. Terminalul video de 7” extra reda imagini de inalta definitie pe tot parcusul apelului, convorbirii si monitorizarii.</Text>
                        <Text>Vederea noctura este excelenta, la 20 m distanta, chiar si in situatiile in care nu exista deloc iluminat public.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Utilizare intuitiva hands-free</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Tastatura Touch este foarte sugestiva, atat prin simbolistica minimalista universala, cat si prin semnalizarile luminoase pe tot parcursul utilizarii.</Text>
                        <Text>Tastele au roluri diferite in stand-by si in utilizare, aceasta multifunctionalitate aducand beneficii suplimentare utilizatorilor.</Text>
                        <Text>Interactiunea utilizatorului cu terminalul este minimala, orice functie realizandu-se cu o singura atingere de tasta.</Text>
                        <Text>O alta caracteristica foarte importanta a tastelor Touch este ca nu se blocheaza, indiferent de frecventa utilizarii, ceea ce inseamna fiabilitate pe termen lung.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Camera video orientabila | LED-uri infrarosu | Functionare la -30°C</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <Text>Camera video este o componenta esentiala, de buna ei functionare si pozitionare depinzand utilitatea intregului sistem. De aceea, modulul de camera video integrat in panoul exterior smart a fost proiectat cu multa atentie, pentru a deservi o multitudine de situatii intalnite in utilizarea de zi cu zi. Astfel:</Text>
                        <br />
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Calitatea imaginilor transmise este foarte buna, cu redarea fidela a culorilor.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Transmiterea imaginilor se face pe tot parcursul apelului, convorbirii si monitorizarii. Imaginea video ramane activa 10 sec. si dupa acordarea accesului, pentru verificarea finalizarii actiunii.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Vederea nocturna este excelenta, chiar si in situatiile in care nu exista deloc iluminat public. LED-urile infrarosu, activate de un senzor de lumina, asigura vizibilitatea la 20 m distanta.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Unghiul de vizualizare se poate optimiza in functie de pozitionarea panoului fata de intrare, camera fiind orientabila cu 25o la stanga sau la dreapta.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />In conditii de condens sau temperaturi foarte scazute, de pana la -30oC, camera functioneaza in parametri fiind prevazuta cu sistem de incalzire locala.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />LED-ul rosu intermitent are rolul de avertizare a prezentei monitorizarii video, pentru un plus de siguranta.
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Nav>
    )
}
                    