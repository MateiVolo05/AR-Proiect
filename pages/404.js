import { Button, Center, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Link from "next/link"

function Error(){
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.white", "blackWhite.black")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    return(
        <Layout title="Page not found">
            <Center pt={40}>
                <Heading textAlign="center" fontSize={["xl",, "6xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Pagina este inexistenta!</Heading>
            </Center> 
            <Center pt={8}>
                <Button fontSize={["md",, "4xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} color={colormode} p={8} _hover={{"bg":revcolor1}}>
                    <Link href="/">Acasa</Link>
                </Button>
            </Center>
        </Layout>
    )
}

export default Error