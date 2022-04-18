import {Grid, GridItem, Box, useColorModeValue, VStack, Heading, Button} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard(prop){
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const bg=useColorModeValue("blue.3", "orange.3")
    const grey=useColorModeValue("grey.light", "grey.dark")
    return (
        <VStack>
            <Link href={prop.link}>
                <Button variant="link" borderStyle="solid" borderWidth={3} borderColor={bg} borderBottomWidth={0} borderRadius="6px 6px 0 0" mb={-2} bg={grey}>
                <Image src={prop.image} width="225vh" height="270vh" />
                </Button>
            </Link>
            <Link href={prop.link}>
                <Box cursor="pointer" textAlign="center" w="231px" h="160px" fontSize={["md",, "2xl"]} color={colormode} bg={grey} borderStyle="solid" borderWidth={3} borderColor={bg} borderTopWidth={0} borderRadius="0 0 6px 6px">
                    {prop.text}
                </Box>
            </Link>
        </VStack>
    )
}