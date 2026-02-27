import './register.css'
import { register } from "../../redux/action"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Cookies from 'js-cookie'

export const Register = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const update = (target) => {
        setdata({
            ...data,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (data.email === "" || data.mobile === "" || data.name === "" || data.password === "") {
            return alert("All fields required")
        }
        try {
            await dispatch(register(data))
            if (Cookies.get("Token")) {
                navigate("/home")
            }
        } catch (err) {
            console.error(err)
            alert("Registration failed")
        }
    }

    return (
        <Box className="register-root">
            <Paper className="register-paper" elevation={4}>
                <Typography variant="h4" className="register-title">Create your account</Typography>
                <Typography variant="body2" className="register-sub">Join and manage your tasks</Typography>

                <Box component="form" onSubmit={handleSubmit} className="register-form">
                    <Stack spacing={2}>
                        <TextField onChange={(e) => update(e.target)} name="name" type="text" label="Your name" variant="outlined" fullWidth />
                        <TextField onChange={(e) => update(e.target)} name="email" type="email" label="Email" variant="outlined" fullWidth />
                        <TextField onChange={(e) => update(e.target)} name="mobile" type="tel" label="Mobile" variant="outlined" fullWidth />
                        <TextField onChange={(e) => update(e.target)} name="password" type="password" label="Password" variant="outlined" fullWidth />
                        <Button type="submit" variant="contained" size="large" className="register-button">Sign up</Button>
                        <Typography variant="body2" align="center" className="register-foot">Already have an account? <Link to="/">Sign in</Link></Typography>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    )
}