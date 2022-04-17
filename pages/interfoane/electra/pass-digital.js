import { Center, Box, Heading, useColorMode, useColorModeValue, Stack, Text, ListIcon, ListItem, List, Button, HStack } from "@chakra-ui/react"
import {ArrowRightIcon} from "@chakra-ui/icons"
import Link from "next/link"
import Image from "next/image";
import Nav from "../../../components/Navbar"
import electra from "../../../public/electra.png"
import electraDark from "../../../public/electra-dark.png"
import SlideShow from "../../../components/SideShow";
import one from "../../../public/1.jpg"
import two from "../../../public/2.jpg"
import three from "../../../public/3.jpg"


export default function Electra(){
    const { colorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.white", "blackWhite.black")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    return(
        <Nav title="Electra Gama Pass Digital">
            
        </Nav>
    )
}