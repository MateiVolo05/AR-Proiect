import {useColorModeValue, Heading, Center, Box, Text, List, ListItem, ListIcon, useColorMode, HStack, Button, VStack, Stack } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Nav from "../../../../../components/Navbar";
import Image from 'next/image'
import panou from "../../../../../public/smart-panou.png"
import panouDark from "../../../../../public/smart-panou-bg.png"
import panouAlb from "../../../../../public/smart-panou-alb.png"
import panouAlbBg from "../../../../../public/smart-panou-alb-bg.png"
import panouAparent from "../../../../../public/smart-panou-aparent.png"
import panouAparentDark from "../../../../../public/smart-panou-aparent-bg.png"
import panouAlbAparent from "../../../../../public/smart-panou-aparent-alb.png"
import panouAlbAparentDark from "../../../../../public/smart-panou-aparent-alb-bg.png"
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
    const [mode, setMode]=useState('incastrat')
    function handleClickWhite(){
        setColor('white')
    }
    function handleClickBlack(){
        setColor('black')
    }
    function handleClickAparent(){
        setMode('aparent')
    }
    function handleClickIncastrat(){
        setMode('incastrat')
    }
    return (
        <Nav title="Smart Panou Video- Blocuri">
            <Box className="product">
                <Center><Heading textAlign="center" fontSize={["xl",, "5xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Smart Panou Video- Blocuri</Heading></Center>
                <HStack pt={24} pl={8} pr={8} justifyContent="center">
                    <Box>
                        {
                            colorMode==='light' && color==='black' && mode==='incastrat'?
                                <Image src={panou} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='light' && color==='black' && mode==='aparent'?
                                <Image src={panouAparent} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='black' && mode==='incastrat'?
                                <Image src={panouDark} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='black' && mode==='aparent'?
                                <Image src={panouAparentDark} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }

                        {
                            colorMode==='light' && color==='white' && mode==='incastrat'?
                                <Image src={panouAlbBg} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='light' && color==='white' && mode==='aparent'?
                                <Image src={panouAlbAparentDark} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='white' && mode==='incastrat'?
                                <Image src={panouAlb} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                        {
                            colorMode==='dark' && color==='white' && mode==='aparent'?
                                <Image src={panouAlbAparent} alt="Panou Smart Video" width="500vh" height="600vh" /> : ''
                        }
                    </Box>
                    <Box alignSelf="flex-end" pb={[2,, 4]} pl={[0,, 4]}>
                        <VStack>
                            <Stack direction={['column',, 'row']}>
                                <Button bg={color2} color={revcolormode} onClick={handleClickWhite} fontSize={['xs', 'lg']}>Alb</Button>
                                <Button bg={color2} color={revcolormode} onClick={handleClickBlack} fontSize={['xs', 'lg']}>Negru</Button>
                            </Stack>
                            <Stack direction={['column',, 'row']}>
                                <Button bg={color2} color={revcolormode} onClick={handleClickIncastrat} fontSize={['xs', 'lg']}>Incastrat</Button>
                                <Button bg={color2} color={revcolormode} onClick={handleClickAparent} fontSize={['xs', 'lg']}>Aparent</Button>
                            </Stack>
                        </VStack>
                    </Box>
                </HStack>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Design GLASS & TOUCH</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                        <Text>Inovatia este o misiune permanenta a companiei ELECTRA, iar utilizarea tehnologiei GLASS & TOUCH si pentru panourile exterioare a fost de la bun inceput o solutie originala si curajoasa.</Text>
                        <Text>Prin integrarea sticlei securizate chimic si a tastaturii Touch in designul panoului s-a obtinut un aspect premium si s-au rezolvat foarte eficient toate provocarile cu care se confrunta un produs montat in exterior: adaptabilitate la arhitectura oricarei cladiri, protectie completa la apa si praf, rezistenta la zgarieturi si lovituri, utilizare prietenoasa si intretinere usoara.</Text>
                    </Box>
                </Box>
                {
                    mode==='aparent' ?
                        <Box pl={4} pt={8} color={colormode}>
                            <Heading fontSize={["lg",, "3xl"]}>Asamblare inteligenta | Montaj facil pe suprafata | Protectie antifurt</Heading>
                            <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                                <Text>Solutia ELECTRA de asamblare a panoului video smart este foarte eficienta, avand ca efect atat aspectul suplu al produsului, cat si usurinta de instalare si etanseitatea.</Text>
                                <Text>Prin imbinarea perfect stratificata a elementelor constructive, respectiv carcasa din aluminiu vopsita in camp electrostatic si sticla de 4 mm intarita chimic, dublata pe verso de placa electronica de aceeasi dimensiune, rezulta un produs compact, de 33 mm grosime, ce se monteaza foarte facil pe orice suprafata.</Text>
                                <Text>Senzorul antifurt este pozitionat in zona surubului de fixare, iar alarma se declanseaza imediat ce acesta este desurubat.</Text>
                            </Box>
                        </Box>
                        : <Box pl={4} pt={8} color={colormode}>
                        <Heading fontSize={["lg",, "3xl"]}>Asamblare inteligenta | Montaj incastrat | Protectie antifurt</Heading>
                        <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]} textAlign="justify">
                            <Text>Solutia ELECTRA de asamblare a panoului video smart este foarte eficienta, avand ca efect atat aspectul suplu al produsului, cat si usurinta de instalare si etanseitatea.</Text>
                            <Text>Prin imbinarea perfect stratificata a elementelor constructive, respectiv carcasa din aluminiu vopsita in camp electrostatic si sticla de 4 mm intarita chimic, dublata pe verso de placa electronica de aceeasi dimensiune, rezulta un produs compact, usor de instalat. Prin montajul incastrat, panoul are doar 3 mm grosime in exterior, devenind un element de arhitectura in sine, o prezenta notabila si in acelasi timp neintruziva.</Text>
                            <Text>Senzorul antifurt este pozitionat in zona surubului de fixare, iar alarma se declanseaza imediat ce acesta este desurubat.</Text>
                        </Box>
                    </Box>
                }
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
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>40 de apartamente | Lista locatari electronica</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <Text>O instalatie cu panou exterior video smart pentru blocuri poate avea pana la 40 de apartamente, iar adresele apartamentelor pot fi programate cu maxim 4 cifre, de la 1 la 9999.</Text>
                        <Text>Display-ul cu 4 randuri x 16 caractere este solutia perfecta pentru listele de locatari in cazul cladirilor mari si asigura o interfata prietenoasa cu utilizatorii, interactionand cu ei in permanenta.</Text>
                        <br />
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />In modul stand-by, se afiseaza un mesaj de bun venit si instructiuni de utilizare pentru vizitatori. Optional, se poate afisa alternant si un al doilea ecran, cu adresa imobilului sau mesaje de interes pentru locatari.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Pe parcursul derularii listei locatarilor, apelului, convorbirii si accesului, display-ul continua sa afiseze instructiuni ce indica pasii de utilizare.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Display-ul poate afisa informatiile in diferite limbi: romana, engleza, spaniola, germana, poloneza, ebraica, etc.
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}>Tastatura Touch iluminata</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <Text>Tastatura Touch capacitiva dezvoltata de ELECTRA este cu adevarat smart, atat din punct de vedere estetic, cat si functional. Solutia tehnica implementata asigura functionarea foarte eficienta a tastaturii si iluminarea uniforma pe timp de noapte:</Text>
                        <br />
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Tastatura este interactiva pe tot parcursul utilizarii, prin semnalizari luminoase intuitive.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Nu au loc apeluri false pe timp de ploaie sau umiditate ridicata.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Tastele nu se blocheaza, indiferent de frecventa utilizarii.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Senzorul de lumina activeaza iluminarea tastaturii doar pe timpul noptii.
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}> Produse aditionale</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <Text>Instalatiile de videointerfon ELECTRA permit conectarea directa a mai multor dispozitive aditionale:</Text>
                        <br />
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />O camera video externa poate fi conectata direct in unitatea centrala, iar monitorizarea din locuinta se poate face succesiv, atat pe camera din panou, cat si pe cea aditionala. Printr-o doza de selectie video, se pot conecta pana la 4 camere video externe aditionale.
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Pentru proprietatile cu mai multe intrari, se pot conecta maxim 3 panouri video aditionale din gama Touch Line – 4 fire, in orice combinatie dorita, cu utilizarea unei doze de selectie video.
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box pl={4} pt={8} color={colormode}>
                    <Heading fontSize={["lg",, "3xl"]}> Caracteristici tehnice</Heading>
                    <Box pl={4} pt={4} pr={4} fontSize={["md",, "xl"]}>
                        <List>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Max. 40 de apartamente
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Dimensiune: 340 x 110 x 33 mm
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Greutate: 2 kg
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Camera video CMOS, 800 TVL
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />6 LED-uri infrarosu si 1 LED rosu de semnalizare a prezentei monitorizarii video
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Display electronic cu 4 randuri x 16 caractere
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Montaj aparent (pe suprafata)
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Conectori PLUG & PLAY
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Mufa micro-USB pentru conexiune cu PC
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Cabluri recomandate in functie de distanta:
                                <br />
                                <List pl={16}>
                                    <ListItem pb={2}>
                                        <ListIcon as={ArrowForwardIcon} color={color1} />4 x 0.5 mm2, pentru o distanta de max. 100 m de la panou pana la ultimul terminal din instalatie
                                    </ListItem>
                                    <ListItem pb={2}>
                                        <ListIcon as={ArrowForwardIcon} color={color1} />4 x 0.5 mm2, pentru o distanta de max. 100 m de la panou pana la ultimul terminal din instalatie
                                    </ListItem>
                                </List>
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Tensiunea de functionare: 13.5 Vc.c. de la sursa de alimentare a instalatiei
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Grad de protectie IP44
                            </ListItem>
                            <ListItem pb={2}>
                                <ListIcon as={ArrowForwardIcon} color={color1} />Gama temperaturilor de functionare: -30 ... +60°C
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Nav>
    )
}
                    