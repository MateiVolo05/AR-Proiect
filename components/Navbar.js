import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure, Link, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, useColorModeValue, VStack, Stack} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import logo from "../public/logo.png"

function Navbar(){
    const {isOpen, onOpen, onClose}=useDisclosure()
    const btnRef=React.useRef()
    const color1=useColorModeValue("#0F9BF6", "#FF5858")
    const color2=useColorModeValue("#1823AB", "#F09819")
    const revcolor1=useColorModeValue("#FF5858", "#0F9BF6")
    const revcolor2=useColorModeValue("#F09819", "#1823AB")
    return(
        <>
            <HStack justifyContent="space-between" bgGradient={`linear(to-br, ${color1}, ${color2})`}>
                <HStack justifyContent="flex-start">
                    <Button ref={btnRef} ml="16px" bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} onClick={onOpen} borderStyle="outline" borderWidth="2px" borderColor="#2b2d2e">
                        <HamburgerIcon color=""/>
                    </Button>
                    <Image src={logo} width="100%" height="100%"/>
                </HStack>
                <Stack direction={["column",, "row"]} pr={4}>
                    <Box>
                        <Link href="/service">
                            <Button bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} fontSize="xl">Service</Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/contact">
                            <Button bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`} fontSize="xl">Contact</Button>
                        </Link>
                    </Box>
                </Stack>
            </HStack>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size='xs'>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Link href="/">Acasa</Link>
                    </DrawerBody>
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