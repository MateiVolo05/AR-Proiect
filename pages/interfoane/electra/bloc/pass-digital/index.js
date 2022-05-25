import { Center, Box, Heading, useColorMode, useColorModeValue, Stack, Text, ListIcon, ListItem, List, Button, HStack, Grid, GridItem, VStack } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image";
import Nav from "../../../../../components/Navbar"
import ProductCard from "../../../../../components/ProductCard";
import terminal from "../../../../../public/terminal-pass-digital.png"
import panou from "../../../../../public/panou-pass-digital.png"
import tag from "../../../../../public/tag.png"
import yala from "../../../../../public/yala.png"


export default function PassDitial(){
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    return(
        <Nav title="Electra Gama Pass Digital">
            <Center><Heading textAlign="center" fontSize={["xl",, "6xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Electra Gama Pass Digital</Heading></Center>
            <Grid templateColumns={["repeat(1, auto)",,"repeat(2, 1fr)" ,, "repeat(4, 1fr)"]} pt={16} gap={4} pr={[,, 20]}>
                <GridItem pb={8}>
                    <ProductCard image={panou} text="Panou Audio Pass Digital - Blocuri, Montaj Aparent, Inox" link="/interfoane/electra/bloc/pass-digital/panou" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={terminal} text="Terminal Audio Pass Digital, Alb" link="/interfoane/electra/bloc/pass-digital/terminal" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={tag} text="Tag RFID Programabil, Albastru" link="/interfoane/electra/bloc/pass-digital/tag" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={yala} text="Yala Electromagnetica, Montaj Aparent, Negru" link="/interfoane/electra/bloc/pass-digital/yala" />
                </GridItem>
            </Grid>
        </Nav>
    )
}