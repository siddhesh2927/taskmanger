import '../Auth/auth.css'
import './register.css'
import { register } from "../../redux/action"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Cookies from 'js-cookie'

export const Register = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const update = (target) => {
        setdata({
            ...data,
            [target.name]: target.value
        })
        setError("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (data.email === "" || data.mobile === "" || data.name === "" || data.password === "") {
            setError("All fields required")
            return
        }
        try {
            await dispatch(register(data))
            if (Cookies.get("Token")) {
                navigate("/home")
            }
        } catch (err) {
            console.error(err)
            setError("Registration failed. Please try again.")
        }
    }

    return (
        <div className="register-root auth-container">
            <div className="register-paper auth-card">
                <div className="auth-header">
                    <h1>Create your account</h1>
                    <p>Please Join and manage your tasks</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            onChange={(e) => update(e.target)}
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={data.name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            onChange={(e) => update(e.target)}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={data.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            id="mobile"
                            onChange={(e) => update(e.target)}
                            name="mobile"
                            type="tel"
                            placeholder="Enter your mobile number"
                            value={data.mobile}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            onChange={(e) => update(e.target)}
                            name="password"
                            type="password"
                            placeholder="Enter a strong password"
                            value={data.password}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="auth-button">Sign up</button>
                </form>

                <div className="auth-footer">
                    Already have an account? <Link to="/">Sign in</Link>
                </div>
            </div>
        </div>
    )
}