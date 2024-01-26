import React from 'react'
import { Button, } from '@chakra-ui/react'

function ButtonComponent({label, handleOnClick = () => {}}) {
  return (
    
      <Button colorScheme='green'
        onClick={handleOnClick}>
        {label}
      </Button>
  
  )
}

export default ButtonComponent
