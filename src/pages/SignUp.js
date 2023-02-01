import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error,setError] = useState('')

    
    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            createUser(email,password)
            navigate('/')
        }catch(er){
            setError(er.message)
            console.log(er.message)
        }
    }
    return (

        <div className="signin-container">

            <form onSubmit={handleSubmit} className="signin-form">
                <h1>Sign up to your account</h1>
                <p>Already have an account? <Link to='/signin' style={{ color: 'blue' }}>Sign In</Link></p>
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
                <button>Sign Up</button>

            </form>
        </div >
    )
}

export default SignUp