import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Container, Button } from '@mui/material';
import axios from 'axios';

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    console.log(username)
    console.log(password)

    const handleLogin = () => {
        let data = {
            username: username,
            password: password
        }
        axios.post("https://dummyjson.com/auth/login", data).then(res => console.log(res.data.token))
    }

    return (
        <Container >
            <Box className='d-flex flex-column mt-4 w-25'>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" className='mt-4' onChange={(e) => setPassword(e.target.value)} />
                <Button variant="outlined"  className='mt-4' onClick={handleLogin}>Outlined</Button>
            </Box>
        </Container>
    )
}

export default Login