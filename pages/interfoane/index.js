import { Center, Box, Heading, useColorMode, useColorModeValue, Stack, Text, ListIcon, ListItem, List, Button } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Link from "next/link"
import Image from "next/image";
import Nav from "../../components/Navbar"
import electra from "../../public/electra.png"
import electraDark from "../../public/electra-dark.png"
import hikvision from "../../public/hikvision.png"


export default function Interfoane(){
    const { colorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    return(
        <Nav title="Interfoane">
            <Box className="product">
                <Center><Heading fontSize={["5xl",, "6xl"]} bgGradient={`linear(to-br, ${color1}, ${color2})`} bgClip="text">Interfoane</Heading></Center>
                <Stack direction={["column",, 'row']} justifyContent={["center",, "space-between"]} pt={16} pr={[4,, 0]}>
                    <Box color={colormode} borderRightStyle="solid" borderTopStyle="solid" borderBottomStyle={["solid",,"none"]}  borderLeftStyle={["solid",,"none"]}  borderColor={color1} borderWidth={[2,,3]} pr="15vh" pb={4} borderRadius={["15px",, "0 15px 0 0"]} ml={[,, -4]} w={["100%",,"50%"]} h={[,,"69vh"]}>
                        <Center pt={4} pl={8}>{colorMode==='light' ? <Image src={electraDark} alt="Electra logo" width="200vh" height="50vh" /> : <Image src={electra} alt="Electra logo" width="200vh" height="50vh"/>}</Center>
                        <Text pl={4} pt={4} fontSize={['md',, '3xl']}>Bloc</Text>
                        <List pl={8} fontSize={['sm',, '2xl']}>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/bloc/pass-digital"><Button variant="link" fontSize={['sm',, '2xl']}>Gama Pass Digital</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/bloc/touch-line"><Button variant="link" fontSize={['sm',, '2xl']}>Gama Touch Line</Button></Link>
                            </ListItem>
                        </List>
                        <Text pl={4} pt={4} fontSize={['md',, '3xl']}>Vila</Text>
                        <List pl={8} fontSize={['sm',, '2xl']}>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/1-familie"><Button variant="link" fontSize={['sm',, '2xl']}>1 Familie</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/2-familii"><Button variant="link" fontSize={['sm',, '2xl']}>2 Familii</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/3-familii"><Button variant="link" fontSize={['sm',, '2xl']}>3 Familii</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/5-familii"><Button variant="link" fontSize={['sm',, '2xl']}>5 Familii</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/8-familii"><Button variant="link" fontSize={['sm',, '2xl']}>8 Familii</Button></Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box borderLeftStyle="solid" borderTopStyle="solid" borderBottomStyle={["solid",,"none"]}  borderRightStyle={["solid",,"none"]}  borderColor={color1} borderWidth={[2,,3]} pr="15vh" borderRadius={["15px",, "15px 0 0 0"]} w={["100%",,"50%"]}>
                        <Center pt={4} pl={8}><Image src={hikvision} alt="Hikvision logo" width="200vh" height="50vh"/></Center>
                        <Text pl={4} pt={4} fontSize={['sm',, '2xl']}>Test</Text>
                    </Box>
                </Stack>
            </Box>
        </Nav>
    )
}