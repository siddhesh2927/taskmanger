import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { login } from "../../redux/action"
import { useDispatch} from "react-redux"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

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
       
        <form className="Form">
            <h1>Sign in</h1>
            <input onChange={(e)=>update(e.target)} name="email" type="email" placeholder="Email" />
            <input onChange={(e)=>update(e.target)} name="password" type="password" placeholder="Password" />
            <Button variant="contained" fullWidth onClick={async(e)=>{
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
                  }} >Submit</Button>
            <p style={{marginTop: "20px"}}>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
            
        </form>
       
    )
}