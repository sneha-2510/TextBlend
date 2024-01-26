import React from 'react'
import { Container, Heading, Box } from '@chakra-ui/react'
import Accordian from './Accordian'


function About() {

    const accordianItems = [
        {
            title: "Title 1",
            description: "this is first "
        },
        {
            title: "Title 2",
            description: "this is second"
        },
        {
            title: "Title 3",
            description: "this is third"
        },
    ]

    return (
        <Container maxW='1000px' >
            <Heading py={6}> Know about us !</Heading>
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

            <Box py={10}>
                {accordianItems.map((accordianItem) => {
                    return <Accordian key={accordianItem.title} {...accordianItem} />
                })}
            </Box>
        </Container>
    )
}

export default About
