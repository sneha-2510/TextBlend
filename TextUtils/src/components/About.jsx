import React, { useState } from 'react'
import {
    Container, Heading, Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
} from '@chakra-ui/react'


function About() {

    const [myStyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        
    });

     const [btnText , setBtnText] = useState("Dark Mode");


    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Dark Mode")
        }
        else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setBtnText("Light Mode")
        }
    }
    return (
        <Container maxW='1000px' style={myStyle} p={4}>
            <Heading paddingBottom={6}> Know about us !</Heading>
            <p >
                <b>TextBlend</b> is a ReactJs website built primarily to do various
                operations on regular typed text. You can safely use WordPad or NotePad
                for text drafting, and saving, but <i>TextBlend</i> offers much more
                than simple text drafting and formatting. TextBlend can convert your
                text to any case in just one simple click of a button. It can extract
                links and numbers safely from a labyrinth of random text or
                sophisticated documentation. It has an improved property of base64
                encoding, reversal of your inputted text.You can even remove whitespaces
                from your scripted documents, and wear up your earphones to listen to
                it, instead of straining your eyes! It does a detailed analyzing of your
                text, and provides an output of words, and characters, along with
                reading time as well. The best part of <i>TextBlend</i> is that it is an
                open source project, as a result, dozens of new features are in the
                upcoming, which definitely makes it a cut above the rest. <br />
                The most eminent features of the website are as follows :
            </p>

            <Box py={10} >
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'primary.500', color: 'white' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'primary.500', color: 'white' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'primary.500', color: 'white' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            <Box>
                <Button onClick={toggleStyle}>
                    {btnText}
                </Button>
            </Box>
        </Container>
    )
}

export default About
