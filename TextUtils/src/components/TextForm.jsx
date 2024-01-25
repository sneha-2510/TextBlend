import React, { useState } from 'react'
import { Textarea, Container, Heading, Button, Stack } from '@chakra-ui/react'

function TextForm() {

    //get the entered text 
    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    //to uppercase function
    const handleUpClick = () => {
        // console.log("uppercase button was clicked");
        const newText = text.toUpperCase();
        setText(newText);
    }

    //to lowercase function
    const handleLowClick = () => {
        // console.log("uppercase button was clicked");
        const newText = text.toLowerCase();
        setText(newText);
    }

    const [text, setText] = useState("");


    return (
        <>
            <Container maxW='1000px'>
                <Heading as='h4' size='md' my={4}>Enter the text to analyze !</Heading>
                <Textarea
                    placeholder='Enter your text here'
                    size='xl'
                    resize='none'
                    height={"230px"}
                    p={3}
                    value={text}
                    onChange={handleOnchange}
                    borderRadius={4}
                />
                {/* TODO : create a button componet and then use that for optimization */}
                <Stack spacing={4} direction='row' align='center' my={6}>
                    <Button colorScheme='green' size='md'
                        onClick={handleUpClick}>
                        UpperCase
                    </Button>

                    <Button colorScheme='green' size='md'
                        onClick={handleLowClick}>
                        LowerCase
                    </Button>
                </Stack>
            </Container>

            <Container maxW='1000px ' >
                <Heading as='h2' size='lg' my={3}>Your text Summary</Heading>
                <p>
                    <b>{text
                        .replace(/\s/)
                        .split(' ')
                        .filter((value) => value !== '').length}
                    </b>{' '}words ,

                    {' '}<b>{text.replace(/\s/g, '').length} </b>{' '}characters
                </p>

                <p>
                {' '}<b>{0.008 * text
                    .replace(/\s/)
                    .split(' ')
                    .filter((value) => value !== '').length}
                </b>{' '} minutes read
                </p>

                <Heading as='h2' size='lg' my={4}>Preview</Heading>
                <p>{text ? text : "Nothing to preview!"}</p>
            </Container>

        </>
    )
}

export default TextForm
