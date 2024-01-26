import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

function Accordian({title, description}) {
// const {title ,description} = action;
  return (
    <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: 'primary.500', color: 'white' }}>
          <Box as="span" flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {description}
      </AccordionPanel>
    </AccordionItem>
  
    
  </Accordion>
  )
}

export default Accordian
