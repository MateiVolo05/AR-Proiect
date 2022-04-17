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
    const images = [
        {
        url: one,
        caption: 'Blog despre baschet',
        },
        {
        url: two,
        caption: 'Bază de date cu filme',
        },
        {
        url: three,
        caption: 'Boli ale sistemului circulator',
        },
      ];
    return(
        <Nav title="Interfoane Electra">
            <Center pl={8}>{colorMode==='light' ? <Image src={electraDark} alt="Electra logo" width="200vh" height="50vh" /> : <Image src={electra} alt="Electra logo" width="200vh" height="50vh"/>}</Center>
            <Stack direction={["column",, 'row']} pt={16} justifyContent="space-around">
                <Box>
                    <Text pl={4} fontSize={['sm',, '2xl']}>Bloc</Text>
                    <List pl={8} fontSize={['lg',, '3xl']}>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/pass-digital"><Button variant="link">Gama Pass Digital</Button></Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/touch-line"><Button variant="link">Gama Touch Line</Button></Link>
                        </ListItem>
                    </List>
                    <Text pl={4} pt={4} fontSize={['sm',, '2xl']}>Vila</Text>
                    <List pl={8} fontSize={['md',, '2xl']}>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/1-familie"><Button variant="link">1 Familie</Button></Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/2-familii"><Button variant="link">2 Familii</Button></Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/3-familii"><Button variant="link">3 Familii</Button></Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/5-familii"><Button variant="link">5 Familii</Button></Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowRightIcon} color={color1} />
                            <Link href="/interfoane/electra/8-familii"><Button variant="link">8 Familii</Button></Link>
                        </ListItem>
                    </List>
                </Box>
                    <SlideShow images={images} width={["100%",,"45%"]} />
            </Stack>
        </Nav>
    )
}