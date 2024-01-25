import React from 'react'
import { Textarea, Container, Heading, Button, Stack } from '@chakra-ui/react'

function TextForm() {
    return (
        <>


            <Container maxW='800px'>
                <Heading as='h4' size='md' my={3}>Enter your text below to analyze : </Heading>

                <Textarea
                    placeholder='Here is a sample placeholder'
                    size='xl'
                    resize='none'
                    height={"300px"}
                    p={3}

                />

                <Stack spacing={4} direction='row' align='center' my={8}>
                   
                    <Button colorScheme='teal' size='md'>
                        UpperCase
                    </Button>
                   
                </Stack>
            </Container>


        </>
    )
}

export default TextForm
