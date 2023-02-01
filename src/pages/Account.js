import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { storage } from '../firebase';
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
const Account = () => {
    const { user, logout } = UserAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        img: '',
        department: '',
        title: '',
        snippet: '',
        timelength: '',
        writerOne: '',
        writerTwo: '',

        context: ''
    })

    const [imageUpload, setImageUpload] = useState(null)

    const  [imageURL, setImageURL ] = useState(null)
    const [refImage, setRefImage] = useState('dog1.png')

    const uploadImage = () => {
        if (!imageUpload) return;

        const imageRef = ref(storage, `articleImages/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            alert('image-uploaded')
            setImageUpload(null)
        }).catch((er) => console.log(er))

    }


    useEffect(() => {
        const imageName = "main-beagle.png"
        getDownloadURL(ref(storage, `articleImages/${imageName}`))
            .then((url) => setImageURL(url))
            .catch((e) => {
                console.log('Problem getting download url')
            })
    }, [refImage])
    const handleChange = (e) => {
        //e may be async
        e.preventDefault()
        try {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [e.target.name]: e.target.value
                }
            })
            // await signIn(email, password)
            // navigate('/account')
        } catch (er) {
            console.log(er.message)
        }
    }
    return (
        <div className='account-container'>

            <div>{(user) && user.providerData[0].email}</div>


            {/* <p>{user}</p> */}
            <button onClick={() => {
                logout();
                navigate('/signin')

            }}>Sign Out</button>
            <form onSubmit={handleChange}>
                <input
                    type="text"
                    placeholder='Title'
                    name='title'
                    value={formData.title || ""}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder='2-biden.jfif'
                    name='img'
                    // value={formData.title || ""}
                    onChange={handleChange}


                    required
                />

                <input
                    type="text"
                    placeholder='Department'
                    name='department'
                    // value={formData.title || ""}
                    onChange={handleChange}


                    required
                />

                <input
                    type="text"
                    placeholder='snippet'
                    name='snippet'
                    // value={formData.title || ""}
                    onChange={handleChange}


                    required />
                <input
                    type="number"
                    placeholder='timelength'
                    name='timelength'
                    // value={formData.title || ""}
                    onChange={handleChange}


                    required />
                <input
                    type="text"
                    placeholder='writer 1'
                    name='writerOne'
                    // value={formData.title || ""}
                    onChange={handleChange}



                    required />
                <input type="text"
                    placeholder='writer 2'
                    name='writerTwo'
                    // value={formData.title || ""}
                    onChange={handleChange}


                />
                <textarea
                    // value={formData.title || ""}
                    placeholder="Form"
                    name='context'
                    onChange={handleChange}
                />


                <button>Submit</button>
            </form>
            <div>
                <input type="file" onChange={event => { setImageUpload(event.target.files[0]) }} />
                <button onClick={uploadImage}>UploadImage</button>
            </div>
            <img src={imageURL} />
        </div>
    )
}

export default Account