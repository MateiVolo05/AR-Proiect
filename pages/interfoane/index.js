import { Center, Box, Heading, useColorMode, useColorModeValue, Stack, Text } from "@chakra-ui/react"
import Image from "next/image";
import Nav from "../../components/Navbar"
import electra from "../../public/electra.png"
import electraDark from "../../public/electra-dark.png"
import hikvision from "../../public/hikvision.png"


export default function Interfoane(){
    const { colorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.white", "blackWhite.black")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    return(
        <Nav title="Interfoane">
            <Center>
                <Heading fontSize={["5xl",, "6xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Interfoane</Heading>
            </Center>
            <Stack direction={["column",, 'row']} justifyContent={["center",, "space-between"]} pt={16} pr={[4,, 0]}>
                <Box borderRightStyle="solid" borderTopStyle="solid" borderBottomStyle={["solid",,"none"]}  borderLeftStyle={["solid",,"none"]}  borderColor={color1} borderWidth={[2,,3]} pr="15vh" borderRadius={["15px",, "0 15px 0 0"]} ml={[,, -4]} w={["100%",,"50%"]}>
                    <Center pt={4} pl={8}>{colorMode==='light' ? <Image src={electraDark} alt="Electra logo" width="200vh" height="50vh" /> : <Image src={electra} alt="Electra logo" width="200vh" height="50vh"/>}</Center>
                    <Text pl={4} fontSize={['sm',, 'lg']}>Test</Text>
                </Box>
                <Box borderLeftStyle="solid" borderTopStyle="solid" borderBottomStyle={["solid",,"none"]}  borderRightStyle={["solid",,"none"]}  borderColor={color1} borderWidth={[2,,3]} pr="15vh" borderRadius={["15px",, "15px 0 0 0"]} w={["100%",,"50%"]}>
                    <Center pt={4} pl={8}><Image src={hikvision} alt="Hikvision logo" width="200vh" height="50vh"/></Center>
                    <Text pl={4} fontSize={['sm',, 'lg']}>Test</Text>
                </Box>
            </Stack>
        </Nav>
    )
}