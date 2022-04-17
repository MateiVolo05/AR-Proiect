import {Box, Heading, Center, Icon, useColorModeValue, Link } from "@chakra-ui/react";
import {ChevronRightIcon, ChevronLeftIcon} from "@chakra-ui/icons"
import Image from "next/image"
import {Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {BsDot} from 'react-icons/bs'

function SlideShow(props){
  const color=useColorModeValue("blue.1",'orange.2')
  const Props = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    indicators: i => (<Icon w={6} h={8} color={color} as={BsDot}/>)
  };
  return(
    <Box className="slide-container" width={props.width}>
      <Fade {...Props} nextArrow={<Icon as={ChevronRightIcon} w={10} h={10} color={color}/>} prevArrow={<Icon as={ChevronLeftIcon} w={10} h={10} color={color}/>}>
        {(props.images).map((image, index) => (
          <Box className="each-fade" key={index}>
            <Box className="image-container" borderRadius="5px" borderStyle="solid" borderWidth={4} borderColor={color}>
              <Image src={image.url} alt={image.caption}/>
            </Box>
          </Box>
        ))}
      </Fade>
    </Box>
  )
}

export default SlideShow;