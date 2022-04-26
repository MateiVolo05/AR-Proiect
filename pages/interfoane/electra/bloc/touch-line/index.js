import { Center, Box, Heading, useColorMode, useColorModeValue, Stack, Text, ListIcon, ListItem, List, Button, HStack, Grid, GridItem, VStack } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image";
import Nav from "../../../../../components/Navbar"
import ProductCard from "../../../../../components/ProductCard";
import extra from "../../../../../public/extra.png"
import smart7 from ".././../../../../public/smart7.png"
import smart3 from "../../../../../public/smart3.png"
import smart from "../../../../../public/smart.png"
import panou from "../../../../../public/smart-panou.png"
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
        <Nav title="Electra Gama Touch Line">
            <Center><Heading fontSize={["xl",, "6xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Electra Gama Touch Line</Heading></Center>
            <Grid templateColumns={["repeat(1, auto)",, "repeat(4, 1fr)"]} pt={16} ml={-8}>
                <GridItem pb={8}>
                    <ProductCard image={extra} text="Extra Terminal Video 7”" link="/interfoane/electra/bloc/touch-line/extra" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={smart7} text="Smart+ Terminal Video 7”" link="/interfoane/electra/bloc/touch-line/smart+7" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={smart3} text="Smart+ Terminal Video 3.5”" link="/interfoane/electra/bloc/touch-line/smart+" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={smart} text="Smart+ Terminal Audio" link="/interfoane/electra/bloc/touch-line/smart-audio" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={panou} text="Smart Panou Video- Blocuri" link="/interfoane/electra/bloc/touch-line/panou" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={tag} text="Tag RFID Programabil, Albastru" link="/interfoane/electra/bloc/touch-line/tag" />
                </GridItem>
                <GridItem pb={8}>
                    <ProductCard image={yala} text="Yala Electromagnetica, Montaj Aparent, Negru" link="/interfoane/electra/bloc/touch-line/yala" />
                </GridItem>
            </Grid>
        </Nav>
    )
}