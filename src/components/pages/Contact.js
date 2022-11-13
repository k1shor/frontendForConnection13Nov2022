import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Container>
                <Box margin={5} boxShadow={3} padding={5} borderRadius={5}>
                    <Box display={'flex'} >
                        <Box width={'50%'} padding={10}>
                            <Typography variant='h3' sx={{ textDecoration: 'underline' }} color={'green'}>
                                Address
                            </Typography>
                            <Typography variant='h4' color={'green'}>
                                Our Store
                            </Typography>
                            <Typography variant='h5' color={'green'}>
                                Jamal, Kathmandu
                            </Typography>
                            <Typography variant='h5' color={'green'}>
                                Phone: 01-4258008
                            </Typography>
                            <Typography variant='body1' color={'green'}>
                                www.ourstore.com.np
                            </Typography>
                            <Typography variant='body2' color={'green'}>
                                info@ourstore.com
                            </Typography>

                        </Box>
                        <Box width={'50%'} padding={5} border={3} borderColor={'gray'} borderRadius={3}>
                            <Typography variant='h5' color={'primary'} textAlign={'center'} marginBottom={2} sx={{ textDecoration: 'underline' }}>Contact Form</Typography>
                            <TextField label="Email" variant="outlined" fullWidth helperText={"Enter your email here"} color={'primary'} placeholder={"example@gmail.com"} />
                            <TextField label="Subject" variant="outlined" fullWidth color={'primary'} />
                            <TextField label="Body" variant="outlined" fullWidth color={'primary'}
                                multiline rows={4} />
                            <Button variant='contained' fullWidth sx={{ marginTop: 2 }}>Submit</Button>

                        </Box>
                    </Box>
                    <Box sx={{ height: '300px', width: '100%'}} marginTop={2} boxShadow={3} padding={5}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3057861182456!2d85.31315489984974!3d27.70784348199421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004c3ac4b5%3A0x583867d356050c8!2sRani%20Pokhari!5e0!3m2!1sen!2snp!4v1663725369264!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{height:'100%',width:'100%'}}></iframe>
                    </Box>
                </Box>
            </Container>

        </>
    )
}

export default Contact