import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { UserAuth } from '../context/AuthContext';

const TestShowArticle = () => {
    const { user, logout } = UserAuth()
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        const imageName = "main-beagle.png"
        getDownloadURL(ref(storage, `articleImages/${imageName}`))
            .then((url) => setImageURL(url))
            .catch((e) => {
                console.log('Problem getting download url')
            })
    }, [])


    return (
        <div>

            <h1>This is your account email</h1>
            <div>{(user) && user.providerData[0].email}</div>
            <button onClick={logout}>Sign Out</button>

            <img src={imageURL} />
        </div>
    )
}

export default TestShowArticle