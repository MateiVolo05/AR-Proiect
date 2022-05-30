import { Center, Box, Heading, useColorMode, useColorModeValue, Stack, Text, ListIcon, ListItem, List, Button, HStack } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Link from "next/link"
import Image from "next/image";
import Layout from "../../../components/Layout"
import electra from "../../../public/electra.png"
import electraDark from "../../../public/electra-dark.png"
import SlideShow from "../../../components/SideShow";
import one from "../../../public/1.png"
import two from "../../../public/2.png"
import three from "../../../public/3.png"


export default function Electra(){
    const { colorMode } = useColorMode()
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const images = [
        {
        url: one,
        caption: 'Interfoane Video & Audio',
        },
        {
        url: two,
        caption: 'Touch Line Exterior',
        },
        {
        url: three,
        caption: 'Touch Line Smart+',
        },
      ];
    return(
        <Layout title="Interfoane Electra">
            <Box className="product">
                <Center pl={8}>{colorMode==='light' ? <Image src={electraDark} alt="Electra logo" width="200vh" height="50vh" /> : <Image src={electra} alt="Electra logo" width="200vh" height="50vh"/>}</Center>
                <Stack direction={["column",, 'row']} pt={16} justifyContent="space-around" color={colormode}>
                    <Box>
                        <Text pl={4} fontSize={['lg',, '3xl']}>Bloc</Text>
                        <List pl={8} fontSize={['md',, '2xl']}>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/bloc/pass-digital"><Button variant="link" fontSize={['md',, '2xl']}>Gama Pass Digital</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/bloc/touch-line"><Button variant="link" fontSize={['md',, '2xl']}>Gama Touch Line</Button></Link>
                            </ListItem>
                        </List>
                        <Text pl={4} pt={4} fontSize={['lg',, '3xl']}>Vila</Text>
                        <List pl={8} fontSize={['md',, '2xl']}>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/1-familie"><Button variant="link" fontSize={['md',, '2xl']}>1 Familie</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/2-familii"><Button variant="link" fontSize={['md',, '2xl']}>2 Familii</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/3-familii"><Button variant="link" fontSize={['md',, '2xl']}>3 Familii</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/5-familii"><Button variant="link" fontSize={['md',, '2xl']}>5 Familii</Button></Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ArrowForwardIcon} color={color1} />
                                <Link href="/interfoane/electra/vila/8-familii"><Button variant="link" fontSize={['md',, '2xl']}>8 Familii</Button></Link>
                            </ListItem>
                        </List>
                    </Box>
                        <SlideShow images={images} width={["100%",,"45%"]} />
                </Stack>
            </Box>
        </Layout>
    )
}