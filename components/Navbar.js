import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure, Link, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, useColorModeValue} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../public/vercel.svg"

function Nav(){
    const {isOpen, onOpen, onClose}=useDisclosure()
    const btnRef=React.useRef()
    const color1=useColorModeValue("#0F9BF6", "#FF5858")
    const color2=useColorModeValue("#1823AB", "#F09819")
    return(
        <>
            <HStack justifyContent="space-between" bgGradient={`linear(to-br, ${color1}, ${color2})`}>
                <HStack justifyContent="flex-start">
                    <Button ref={btnRef} ml="16px" colorScheme='#13547a' onClick={onOpen} borderStyle="outline" borderWidth="2px">
                        <HamburgerIcon color="red"/>
                    </Button>
                    <Image src={logo} width={50} height={50}/>
                </HStack>
                <Box>
                    <Link href="/service">
                        <Button>Service</Button>
                    </Link>
                    <Link href="/contact">
                        <Button>Contact</Button>
                    </Link>
                </Box>
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

export default Nav