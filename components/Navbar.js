import { HamburgerIcon, Icon, MoonIcon, SunIcon, PhoneIcon, SettingsIcon} from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, useColorModeValue, VStack, Stack, useColorMode, DrawerFooter, Text, Switch, MenuItem} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import React from "react";
import logo from "../public/logo.png"

function Navbar(){
    const {isOpen, onOpen, onClose}=useDisclosure()
    const btnRef=React.useRef()
    const { colorMode, toggleColorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const revcolor2=useColorModeValue("orange.2", "blue.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const bg=useColorModeValue("blue.3", "orange.3")
    const MenuItem = ({ href, children, ...props }) => (
        <Link href={href} passHref>
          <Button as="a" variant="link" {...props}>
            {children}
          </Button>
        </Link>
    );
    return(
        <>
            <HStack justifyContent="space-between" bgGradient={`linear(to-br, ${color1}, ${color2})`}>
                <HStack justifyContent="flex-start">
                    <Button ref={btnRef} ml={8} bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} onClick={onOpen} borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e" _hover={{"bg":revcolor1}}>
                        <HamburgerIcon color="#2b2d2e" fontSize="2xl"/>
                    </Button>
                    <MenuItem href='/'>
                        <Image src={logo} width="120%" height="120%" alt="A&R Proiect logo"/>
                    </MenuItem>
                </HStack>
                <Stack direction={["column",, "row"]} pr={4}>
                    <Box>
                        <MenuItem href="/service">
                            <Button bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} color={colormode} fontSize="xl" borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e" _hover={{"bg":revcolor1}}>
                                <Icon as={SettingsIcon} mr={1} color={colormode} />Service
                            </Button>
                        </MenuItem>
                    </Box>
                    <Box>
                        <MenuItem href="/contact">
                            <Button bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} color={colormode} fontSize="xl" borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e" _hover={{"bg":revcolor1}}>
                                <Icon as={PhoneIcon} mr={1} color={colormode}/>Contact
                            </Button>
                        </MenuItem>
                    </Box>
                </Stack>
            </HStack>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size='xs'>
                <DrawerOverlay/>
                <DrawerContent bg={bg}>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <MenuItem href="/" color={colormode}>Acasa</MenuItem>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text mr={2} fontSize="lg">Mod {colorMode === 'light' ? <Icon as={SunIcon}></Icon> : <Icon as={MoonIcon}></Icon>}</Text>
                        <Switch onChange={toggleColorMode} colorScheme='black' size="lg" borderRadius={16} borderColor={revcolor1} borderWidth={3}/>
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
                <link rel="icon" href="/icon.png" /> 
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