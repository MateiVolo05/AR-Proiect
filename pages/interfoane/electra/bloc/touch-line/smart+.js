import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon, useColorMode, HStack, Button, VStack, Stack } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Image from 'next/image'
import smart3 from "../../../../../public/smart3.png"
import smart3Bg from "../../../../../public/smart3-bg.png"
import smart3Alb from "../../../../../public/smart3Alb.png"
import smart3AlbBg from "../../../../../public/smart3Alb-bg.png"
import { useState } from "react";
import Layout from "../../../../../components/Layout";

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
        <Layout title='SMART+ TERMINAL VIDEO 3.5"'>
            <Box className="product">
                <Center><Heading textAlign="center" fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">SMART+ TERMINAL VIDEO 3.5{'"'}</Heading></Center>
                <HStack pt={24} pl={8} pr={8} justifyContent="center">
                    <Box>
                        {
                            colorMode==='light' && color==='black' ?
                                <Image src={smart3} alt='SMART+ TERMINAL VIDEO 3.5"' width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='black' ?
                                <Image src={smart3Bg} alt='SMART+ TERMINAL VIDEO 3.5"' width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='light' && color==='white' ?
                                <Image src={smart3AlbBg} alt='SMART+ TERMINAL VIDEO 3.5"' width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='white'?
                                <Image src={smart3Alb} alt='SMART+ TERMINAL VIDEO 3.5"' width="500vh" height="600vh" /> : ''
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
                        <Text>STICLA securizata este materialul esential utilizat in realizarea produselor din gama Touch Line, ceea ce induce o eleganta minimalista si atemporala.</Text>
                        <Text>Pe langa estetica minimalista, sticla securizata printr-un proces chimic de intarire transfera asupra produselor si alte caracteristici fundamentale: rezistenta la zgarieturi si lovituri, etanseitate, pastrarea in timp a aspectului lucios si intretinerea usoara.</Text>
                        <Text>Utilizarea tastelor TOUCH iluminate se inscrie in tendintele actuale in design si tehnologie, vizand usurinta de utilizare printr-un limbaj vizual universal valabil, cu marcaje grafice intuitive.</Text>
                        <Text>Prin aspectul compact si esentializat, terminalul video de 3.5” smart+ este o prezenta cu stil, ce se integreaza natural in orice ambianta interioara.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Asamblare inteligenta | Instalare usoara</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Solutia ELECTRA de asamblare a terminalului video de 3.5” smart+ este originala si eficienta, avand ca efect atat aspectul suplu al produsului, cat si protectia la praf si usurinta de instalare.</Text>
                        <Text>Prin imbinarea perfect stratificata a elementelor constructive, respectiv carcasa rezistenta din ABS si sticla de 3 mm securizata chimic, dublata pe verso de placa electronica de aceeasi dimensiune, rezulta un produs compact, de doar 22 mm grosime, ce se monteaza foarte facil pe orice suprafata.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Display LCD color de 3.5”</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Adevarul simplu este ca o imagine spune mai mult decat o mie de cuvinte. Terminalul video de 3.5” smart+ reda imagini de inalta definitie pe tot parcusul apelului, convorbirii si monitorizarii.</Text>
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
                    <Heading fontSize={["lg",, "3xl"]}>Produse aditionale</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <Text>Terminalul video de 3.5” smart+ poate realiza mai multe functii in interiorul locuintei, deoarece ofera posibilitatea conectarii directe a unor dispozitive aditionale:</Text>
                        <br />
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Daca se conecteaza butonul de sonerie de la intrare, terminalul indeplineste si rolul de sonerie.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />In acelasi timp, la terminal se poate conecta si un dispozitiv suplimentar de avertizare acustica sau luminoasa a apelului.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Pentru locuintele spatioase, se pot conecta mai multe terminale video si audio aditionale din gama Touch Line – 4 fire, in orice combinatie dorita.
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Compatibilitate extinsa</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Terminalul video de 3.5” smart+ este compatibil cu toate panourile exterioare, terminalele video si audio si echipamentele auxiliare din gama Touch Line – 4 fire, oferind posibilitatea de a fi utilizat atat in configuratii pentru case, cat si in cele pentru blocuri.</Text>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}> Caracteristici tehnice</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Dimensiune: 210 x 96 x 22 mm
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Greutate: 0.5 kg
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Display LCD – 3.5”: 320 x RGB x 240, ◄/►/▼/▲ - 60/ 60/ 40/ 60
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Reglaje pentru imaginea video disponibile pe verso: crominanta si luminozitate
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Montaj aparent (pe suprafata)
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Conectori cu surub
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Cabluri recomandate in functie de distanta:
                                <br />
                                <List pl={16}>
                                    <ListItem>
                                        <ListIcon as={ArrowForwardIcon} color={color1} />4 x 0.5 mm2, pentru o distanta de max. 100 m de la panou pana la ultimul terminal din instalatie
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={ArrowForwardIcon} color={color1} />4 x 0.75 mm2, pentru o distanta de max. 150 m de la panou pana la ultimul terminal din instalatie
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={ArrowForwardIcon} color={color1} />UTP cat 5e (AWG 24) sau UTP cat 6e (AWG 23), pentru o distanta de max. 200 m de la panou pana la ultimul terminal din instalatie
                                    </ListItem>
                                </List>
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Tensiunea de functionare: 13.5 Vc.c. de la sursa de alimentare a instalatiei
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Gama temperaturilor de functionare: 0 ... +45°C
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}
                    