import Nav from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export default function Layout({title, children}){
    return(
        <Box position="relative" m='0' minH='100vh' _after={{content:'""', display:"block", height:"72px"}}>
            <Nav title={title}>
                {children}
            </Nav>
            <Box style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '72px',
                }}
                >
                <Footer/>
            </Box>
      </Box>
    )
}