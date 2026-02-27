import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { login } from "../../redux/action"
import { useDispatch} from "react-redux"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

import "../../components/Auth/auth.css"
import "./login.css"

export const Login=()=>{
    const dispatch=useDispatch()
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
   useEffect(()=>{
    if(Cookies.get("Token")){
        return navigate("/home")
    }
   },[])
    
   
     
    const update=(target)=>{
        setData({
            ...data,
            [target.name]:target.value
        })
    }
   
    return (
       
        <div className="auth-container">
            <form className="auth-card">
                <div className="auth-header">
                    <h1>Sign In</h1>
                    <p>Welcome back! login to your account</p>
                </div>
                <div className="auth-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={(e)=>update(e.target)} 
                            name="email" 
                            type="email" 
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            onChange={(e)=>update(e.target)} 
                            name="password" 
                            type="password" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{
                            backgroundColor: '#6366f1',
                            padding: '0.75rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#4f46e5',
                                transform: 'translateY(-2px)',
                            }
                        }}
                        onClick={async(e)=>{
                            e.preventDefault()
                           if(data.email==="" || data.password===""){
                               return alert("all fields required")
                           }
                             await dispatch(login(data))
                                .then(()=>{
                                    
                                    if(Cookies.get("Token")){
                                        navigate("/home")
                                     }
                                   
                                
                             })
                              }} 
                    >
                        Sign In
                    </Button>
                </div>
                <div className="auth-footer">
                    <p>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </div>
            </form>
        </div>
       
    )
}