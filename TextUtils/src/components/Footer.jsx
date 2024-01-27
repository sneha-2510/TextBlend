import React from 'react'
import {Text, VStack} from "@chakra-ui/react"

function Footer() {
  return (
    <React.Fragment>
      <VStack w={'100%'} mt={14} h={'42px'} bg={"gray.200"}>
        <Text mt={2.5}> Made with ❤️ by Sneha-Rani</Text>
      </VStack>
    </React.Fragment>
  )
}

export default Footer
