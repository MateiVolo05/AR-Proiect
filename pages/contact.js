import { Box, Button, Stack, Input, Textarea, useColorModeValue, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import emailjs  from "emailjs-com";
import React, { useState } from 'react';
import Nav from '../components/Navbar'

export default function Contact(){
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_l2yrrw9', 'template_101dz2j', e.target, 'lBGiE0Qm5VxkzdSQt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            });
        e.target.reset()
    }
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    return (
        <Nav title="Contact">
            <form onSubmit={sendEmail}>
                <Box w={["100%",, "55%"]} pl={[4,, 24]} pt={8} pr={4}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="name"  fontSize={["lg",, "2xl"]} color={colormode}>Nume:</FormLabel>
                        <Input type="text" name="name" borderWidth={3} borderColor={color2} focusBorderColor={color1}/>
                        <FormErrorMessage>Completeaza acest camp</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="email" pt={4}  fontSize={["lg",, "2xl"]} color={colormode}>Email:</FormLabel>
                        <Input type="email" name="email" borderWidth={3} borderColor={color2} focusBorderColor={color1}/>
                        <FormErrorMessage>Completeaza acest camp</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="number" pt={4}  fontSize={["lg",, "2xl"]} color={colormode}>Numer de telefon:</FormLabel>
                        <Input type="tel" name="number" borderWidth={3} borderColor={color2} focusBorderColor={color1}/>
                        <FormErrorMessage>Completeaza acest camp</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="message" pt={4}  fontSize={["lg",, "2xl"]} color={colormode}>Mesaj:</FormLabel>
                        <Textarea resize="vertical" maxH="200px" name="message" borderWidth={3} borderColor={color2} focusBorderColor={color1}/>
                        <FormErrorMessage>Completeaza acest camp</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" mt={4} bg={color2}  fontSize={["lg",, "2xl"]} color="blackWhite.white">Trimite</Button>
                </Box>
            </form>
        </Nav>
    )
}
