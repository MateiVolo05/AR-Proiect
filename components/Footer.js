import {Stack, HStack, Button, useColorModeValue, Heading, VStack, Link} from '@chakra-ui/react'
import React from 'react'
import {FaInstagram, FaFacebook} from 'react-icons/fa'

export default function Footer(){
  const bg=useColorModeValue("blue.3", "orange.3")
  const text=useColorModeValue('blackWhite.white', 'blackWhite.black')
  function handleClick(link){
    window.open(`${link}`)
  }
  return(
      <Stack alignContent="stretch" color={text} pt={[8,,0]}>
          <Stack bg={bg} pt="8px" pb="8px" pl="4px" pr="4px" justifyContent="center">
            <Stack pt="8px" pb="8px" pl="4px" pr="4px" justifyContent="space-between" direction={['column', , 'row']}>
              <VStack gap={2} alignItems="flex-start">
                <Heading fontSize={['md',,"xl"]} pl={4}>Contact</Heading>
                <Button variant="ghost" color={text}><Link href='tel:0740035746'>Telefon: 0740 035 746</Link></Button>
                <Button variant="ghost" color={text}><Link href='tel:0740035745'>Telefon: 0740 035 745</Link></Button>
              </VStack>
              <VStack gap={2} pr={8}>
                  <Heading fontSize={['md',,"xl"]}>Urmareste-ne</Heading>
                  <Button variant="ghost" color={text} onClick={()=>handleClick('https://www.instagram.com/alma.jaluzele.neamt/')} fontSize={['sm',,"lg"]} pr={10}><FaInstagram />Instagram</Button>
                  <Button variant="ghost" color={text} onClick={()=>handleClick('https://www.facebook.com/profile.php?id=100063538467118')} fontSize={['sm',,"lg"]} pr={12}><FaFacebook />Facebook</Button>
              </VStack>
            </Stack>
          </Stack>
      </Stack>
  )
}