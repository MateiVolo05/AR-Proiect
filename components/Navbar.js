import { HamburgerIcon, Icon, MoonIcon, SunIcon, ChatIcon, SettingsIcon, ArrowForwardIcon, ArrowDownIcon} from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, useColorModeValue, VStack, Stack, useColorMode, DrawerFooter, Text, Switch, Grid, GridItem, DrawerHeader} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import React, { useState } from "react";
import logo from "../public/logo.png"
import electra from "../public/electra.png"
import electraDark from "../public/electra-dark.png"
import hikvision from "../public/hikvision.png"

function Navbar(){
    const {isOpen, onOpen, onClose}=useDisclosure()
    const btnRef=React.useRef()
    const { colorMode, toggleColorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const revcolor2=useColorModeValue("orange.2", "blue.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revColorMode=useColorModeValue("blackWhite.white", "blackWhite.black")
    const bg=useColorModeValue("blue.3", "orange.3")
    const MenuItem = ({ href, children, ...props }) => (
        <Link href={href} passHref>
          <Button as="a" variant="link" {...props}>
            {children}
          </Button>
        </Link>
    );
    const [state, setState]=useState({
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
    })
    const handleClick=(id)=>{
        setState({...state, [id]:1-state[id]})
    }
    return(
        <>
            <HStack justifyContent="space-between" bgGradient={`linear(to-br, ${color1}, ${color2})`}>
                <HStack justifyContent="flex-start">
                    <Button ref={btnRef} ml={[2,, 8]} bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} onClick={onOpen} borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e" _hover={{"bg":revcolor1}}>
                        <HamburgerIcon color={colormode} fontSize="2xl"/><Text display={["none",, "block"]} color={colormode} fontSize="xl" pl={2}>Produse</Text>
                    </Button>
                    <MenuItem href='/'>
                        <Image src={logo} width="120%" height="120%" alt="A&R Proiect logo"/>
                    </MenuItem>
                </HStack>
                <Stack direction={["column",, "row"]} pr={4}>
                    <Box>
                        <MenuItem href="/service">
                            <Button bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} color={colormode} fontSize={["sm",, "xl"]} borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e" _hover={{"bg":revcolor1}}>
                                <Icon as={SettingsIcon} mr={1} color={colormode} />Service
                            </Button>
                        </MenuItem>
                    </Box>
                    <Box>
                        <MenuItem href="/contact">
                            <Button bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} color={colormode} fontSize={["sm",, "xl"]} borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e" _hover={{"bg":revcolor1}}>
                                <Icon as={ChatIcon} mr={1} color={colormode}/>Contact
                            </Button>
                        </MenuItem>
                    </Box>
                </Stack>
            </HStack>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size='xs'>
                <DrawerOverlay/>
                <DrawerContent bg={bg} borderRightStyle="solid" borderRightWidth={3} borderRightColor={revcolor2} borderRadius="0 8px 8px 0">
                    <DrawerCloseButton color={useColorModeValue("orange.1", "blue.3")} borderStyle="solid" borderWidth={1} borderColor={useColorModeValue("orange.1", "blue.3")} />
                    <DrawerHeader>
                        <Text mr={2} fontSize="lg">Mod {colorMode === 'light' ? <Icon as={SunIcon}></Icon> : <Icon as={MoonIcon}></Icon>}</Text>
                        <Switch onChange={toggleColorMode} colorScheme='black' size="lg" borderRadius={16} borderColor={revcolor1} borderWidth={3}/>
                    </DrawerHeader>
                    <DrawerBody pt={16}>
                        <Grid templateColumns="repeat(2, 1fr)">
                            <GridItem>
                                <MenuItem href="/interfoane" color={revColorMode} fontSize="md" pt={4} pb={4}>Interfoane</MenuItem>
                                {state[1]===1 ? 
                                    <Grid templateRows="repeat(2, auto)" pl={6}>
                                        <GridItem>
                                            <MenuItem href="/interfoane/electra" color={revColorMode} fontSize="sm" pt={4} pb={4}>Electra</MenuItem>
                                        </GridItem>
                                        <GridItem>
                                            <MenuItem href="/interfoane/hikvision" color={revColorMode} fontSize="sm" pt={4} pb={4}>Hikvision</MenuItem>
                                        </GridItem>
                                    </Grid> 
                                    : <Text></Text>
                                }
                            </GridItem>
                            <GridItem>
                                <Button onClick={()=>{handleClick(1)}} color={revColorMode} bg={bg} _hover={{bg:{bg}}} fontSize="md">
                                    {state[1]===0 ? <Icon as={ArrowForwardIcon}/> : <Icon as={ArrowDownIcon} />}
                                </Button>
                            </GridItem>
                            <GridItem>
                                <MenuItem href="/sisteme-control-acces" color={revColorMode} fontSize="md" pt={4} pb={4}>Sisteme control acces</MenuItem>
                                {state[2]===1 ? <Text color={revColorMode}>Open</Text> : <Text></Text>}
                            </GridItem>
                            <GridItem>
                                <Button onClick={()=>{handleClick(2)}} color={revColorMode} bg={bg} _hover={{bg:{bg}}} fontSize="md">
                                    {state[2]===0 ? <Icon as={ArrowForwardIcon}/> : <Icon as={ArrowDownIcon} />}
                                </Button> 
                            </GridItem>
                            <GridItem>
                                <MenuItem href="/sisteme-supraveghere" color={revColorMode} fontSize="md" pt={4} pb={4}>Sisteme supraveghere</MenuItem>
                                {state[3]===1 ? <Text color={revColorMode}>Open</Text> : <Text></Text>}
                            </GridItem>
                            <GridItem>
                                <Button onClick={()=>{handleClick(3)}} color={revColorMode} bg={bg} _hover={{bg:{bg}}} fontSize="md">
                                    {state[3]===0 ? <Icon as={ArrowForwardIcon}/> : <Icon as={ArrowDownIcon} />}
                                </Button> 
                            </GridItem>
                            <GridItem>
                                <MenuItem href="/sisteme-de-alarma" color={revColorMode} fontSize="md" pt={4} pb={4}>Sisteme de alarma</MenuItem>
                                {state[4]===1 ? <Text color={revColorMode}>Open</Text> : <Text></Text>}
                            </GridItem>
                            <GridItem>
                                <Button onClick={()=>{handleClick(4)}} color={revColorMode} bg={bg} _hover={{bg:{bg}}} fontSize="md">
                                    {state[4]===0 ? <Icon as={ArrowForwardIcon}/> : <Icon as={ArrowDownIcon} />}
                                </Button>  
                            </GridItem>
                            <GridItem>
                                <MenuItem href="/Avertizare-incendiu" color={revColorMode} fontSize="md" pt={4} pb={4}>Avertizare incendiu</MenuItem>
                                {state[5]===1 ? <Text color={revColorMode}>Open</Text> : <Text></Text>}
                            </GridItem>
                            <GridItem>
                                <Button onClick={()=>{handleClick(5)}} color={revColorMode} bg={bg} _hover={{bg:{bg}}} fontSize="md">
                                    {state[5]===0 ? <Icon as={ArrowForwardIcon}/> : <Icon as={ArrowDownIcon} />}
                                </Button> 
                            </GridItem>
                        </Grid>
                    </DrawerBody>
                    <DrawerFooter>
                        <Stack direction={["column",, "row"]}>
                            <Text fontSize="xl" color={revColorMode}>Parteneri</Text>
                            <VStack>
                                {colorMode==='light' ? <Image src={electra} alt="Electra logo" width="130%" height="30%" /> : <Image src={electraDark} alt="Electra logo" width="130%" height="30%"/>}
                                <Image src={hikvision} alt="Hikvision logo" width="130%" height="30%"/>
                            </VStack>
                        </Stack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default function Nav({title, children}){
    return(
        <Box minH="50px">
            <Head>
                {title && <title>{title}</title>}
                <meta charSet="UTF-8" />
                <link rel="icon" href="/icon.png" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Interfoane, cartele de acces, sisteme de control acces, supraveghere si de alarma in Piatra Neamt" />
                <meta name="keywords" content="ar proiect, interfoane, piatra neamt, cartele, supraveghere, alarma, control acces, securitate" />
            </Head>
            <VStack align="stretch" justifyContent="space-between" spacing={8}>
                <Navbar />
                <Box as="main" h="full" pl={4}>
                    {children}
                </Box>
            </VStack>
        </Box>
    )
}