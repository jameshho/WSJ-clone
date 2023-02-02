import React from 'react'
import { useState } from 'react'
import NavIndex from './NavIndex'
import data from '../dataSet/indexData'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const navigate = useNavigate()
    const { user,logout } = UserAuth()
    return (
        <div>
            <div className="title">
                <img src='../images/wsj.icon.png' className='logo' onClick={() => navigate('/')} />

                {(user) ? (<div><div onClick={() => navigate('/account')}>{`Welcome back: ${user.email}`}</div>  <button onClick={logout}>Sign Out</button></div>) : <div onClick={() => navigate('/signin')}
                    >Sign In</div>}
                    
            </div>
            <div className='title-detail'>
                <p>English Edition ▾</p>
                <p>Print Edition</p>
                <p>Video</p>
                <p>Podcasts</p>
                <p>Latest Headlines</p>
                <p>More ▾</p>
            </div>
            <div className='navbar'>
                {Object.entries(data).map(([navIndex, value], index) => <NavIndex key={index} navIndex={navIndex} value={value} />)}

            </div>

        </div >
    )
}

export default Navbar