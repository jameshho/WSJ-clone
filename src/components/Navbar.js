import React from 'react'
import { useState } from 'react'
import NavIndex from './NavIndex'
import data from '../dataSet/indexData'

const Navbar = () => {


    return (
        <div>  
            <div className="title">
            <img src='../images/wsj.icon.png' className='logo' />
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
                {Object.entries(data).map(([navIndex, value], index) => <NavIndex id={index} navIndex={navIndex} value={value} />)}



            </div>
            
        </div>
    )
}

export default Navbar