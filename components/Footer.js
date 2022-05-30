import {Stack, HStack, Button} from '@chakra-ui/react'
import React from 'react'

export default function Footer(){
    return(
        <Stack alignContent="stretch">
            <Stack bg="blackWhite.white" pt="8px" pb="8px" pl="4px" pr="4px" justifyContent="center">
              <Stack pt="8px" pb="8px" pl="4px" pr="4px" justifyContent="space-between" direction={['column', , 'row']}>
                <HStack gap={8} pl={4}>
                    <Button>ygygygygyg</Button>
                    <Button>ygygygygyg</Button>
                    <Button>ygygygygyg</Button>
                </HStack>
              </Stack>
            </Stack>
        </Stack>
    )
}