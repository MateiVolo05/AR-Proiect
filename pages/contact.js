import { Box, Button, Input, Textarea, useColorModeValue, FormControl, FormLabel, Icon, Text } from "@chakra-ui/react";
import emailjs  from "emailjs-com";
import React, { useState } from 'react';
import Layout from '../components/Layout'
import {EmailIcon, CheckIcon} from "@chakra-ui/icons"

export default function Contact(){
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_service, process.env.REACT_APP_templete, e.target, process.env.REACT_APP_user)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            });
        setSend(true)
    }
    const [send, setSend]=useState(false)
    const color1=useColorModeValue("blue.1", "orange.1")
    const color2=useColorModeValue("blue.2", "orange.2")
    const colormode=useColorModeValue("blackWhite.black", "blackWhite.white")
    const revcolor1=useColorModeValue("orange.1", "blue.1")
    const revcolor2=useColorModeValue("orange.2", "blue.2")
    return (
        <Layout title="Contact">
            <form onSubmit={sendEmail}>
                <Box w={["100%",, "55%"]} pl={[4,, 24]} pt={8} pr={4}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="name"  fontSize={["lg",, "2xl"]} color={colormode}>Nume:</FormLabel>
                        <Input onInvalid={e => e.target.setCustomValidity('Completeaza acest camp')} onInput={e => e.target.setCustomValidity('')} type="text" name="name" borderWidth={3} borderColor={revcolor2} focusBorderColor={revcolor1}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="email" pt={4}  fontSize={["lg",, "2xl"]} color={colormode}>Email:</FormLabel>
                        <Input onInvalid={e => e.target.setCustomValidity('Completeaza acest camp')} onInput={e => e.target.setCustomValidity('')} type="email" name="email" borderWidth={3} borderColor={revcolor2} focusBorderColor={revcolor1}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="number" pt={4}  fontSize={["lg",, "2xl"]} color={colormode}>Numer de telefon:</FormLabel>
                        <Input onInvalid={e => e.target.setCustomValidity('Completeaza acest camp')} onInput={e => e.target.setCustomValidity('')} type="tel" name="number" borderWidth={3} borderColor={revcolor2} focusBorderColor={revcolor1}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="message" pt={4}  fontSize={["lg",, "2xl"]} color={colormode}>Mesaj:</FormLabel>
                        <Textarea onInvalid={e => e.target.setCustomValidity('Completeaza acest camp')} onInput={e => e.target.setCustomValidity('')} resize="vertical" maxH="200px" name="message" borderWidth={3} borderColor={revcolor2} focusBorderColor={revcolor1}/>
                    </FormControl>
                    {   
                        send===false ? 
                            <Button type="submit" mt={4} bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`}  fontSize={["lg",, "2xl"]} color={colormode} _hover={{"bg":revcolor1}}>Trimite<Icon as={EmailIcon} ml={2}/></Button>
                            : <Button type="submit" mt={4} bgGradient={`linear(to-br, ${revcolor1}, ${revcolor2})`}  fontSize={["lg",, "2xl"]} color={colormode} _hover={{"bg":revcolor1}}>Trimis<Icon as={CheckIcon} ml={2}/></Button>
                    }
                </Box>
            </form>
            <Box pt={8} pl={24} fontSize={["lg",, "2xl"]} color={colormode}>
                { send===true ? <Text>Mesajul tau a fost primit! In scurt timp vei primi un mail de confirmare</Text> : <Text /> }
            </Box>
        </Layout>
    )
}
