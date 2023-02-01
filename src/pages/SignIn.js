import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { signIn } = UserAuth() || null

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await signIn(email,password)
            navigate('/')
        }catch(er){
            setError(er.message)
            console.log(er.message)
        }
    }
    return (

        <div className="signin-container">

            <form onSubmit={handleSubmit} className="signin-form">
                <h1>Sign In to your account</h1>
                <p>Don't have an account? <Link to='/signup' style={{ color: 'blue' }}>Sign up</Link></p>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    value={email} />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    value={password}
                />
                <button>Sign In</button>

            </form>
        </div >
    )
}

export default SignIn