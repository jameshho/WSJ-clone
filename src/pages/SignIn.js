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
        try {
            await signIn(email, password)
            navigate('/')
        } catch (er) {
            setError(er.message)
            console.log(er.message)
        }
    }

    return (


        <div className='signin'>

            <div className="signin-container">

                <form onSubmit={handleSubmit} className="signin-form">
                    <p className='signin-text'>Sign In</p>
                    <label>Email or username</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        // placeholder="email"

                        value={email} />
                    <label>Password</label>

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        // placeholder="password"
                        placeholder=""

                        value={password}
                    />
                    <button className='button-signin first'>Sign In</button>
                    <div className='forget-password'>
                        <p>
                            Forgot your <span>username</span> or <span>password</span>?
                        </p>
                        <p className='social-signin-text'>Social Sign-in</p>
                    </div>


                    <div className='social-signin'>
                        <img src="/images/facebook-icon.png" />
                        <button>Sign in with Facebook</button>
                    </div>
                    <div className='social-signin'>

                        <img src="/images/google-icon.png" />
                        <button>Sign in with Google</button>

                    </div>

                    <div className='social-signin'>

                        <img src="/images/apple-icon.png" />
                        <button >Sign in with Apple</button>

                    </div>
                    <div className='new-to-wsj'><p>New to WSJ?</p></div>
                    <button className="button-signin" onClick={() => navigate('/signup')}>Subscribe</button>


                    <div>

                    </div>

                </form>
            </div>
        </div >
    )
}

export default SignIn