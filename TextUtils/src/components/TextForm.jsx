import React, { useState} from 'react'
import { Textarea, Container, Heading, Stack, } from '@chakra-ui/react'
import ButtonComponent from './ButtonComponent'

function TextForm() {
   
    const [text, setText] = useState("");

    //get the entered text 
    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    const handleClearClick = () => {
        // console.log("uppercase button was clicked");
        const newText = "";
        setText(newText);
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

    const handleSentenceClick = () => {
        // console.log("uppercase button was clicked");
        const words = text.toLowerCase().split(' ');
        const sentenceCased = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
        const newText = sentenceCased.join(' ');
        
        setText(newText);
    }

    const buttonItems = [
        {
            label: "Clear Text",
            handleOnClick: handleClearClick
        },
        {
            label: "UpperCase",
            handleOnClick: handleUpClick
        },
        {
            label: "LowerCase",
            handleOnClick: handleLowClick
        }, 
        {
            label : "Sentence Case",
            handleOnClick : handleSentenceClick
        }
     
    ]

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

                {/* TODO : create a button componet */}
                <Stack spacing={4} direction='row' align='center' my={6}>
                    {buttonItems.map((buttonItem) => {
                        return <ButtonComponent key={buttonItem.label} {...buttonItem} />
                    })}
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
