import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../firebase';


import { db } from '../firebase';

const TestUploadForm = () => {
    const { user, logout } = UserAuth()
    const [imageUpload, setImageUpload] = useState(null)

    const [imageURL, setImageURL] = useState(null)

    const [formData, setFormData] = useState({
        img: 'img.pg',
        department: 'department',
        title: 'title',
        snippet: 'snippet',
        timelength: 'timelength',
        writerOne: 'writerOne',
        writerTwo: 'writerTwo',
        context: 'writerTwo'


    })
    const usersCollectionRef = collection(db, "article")

    const uploadImage = () => {
        if (!imageUpload) return;

        const imageRef = ref(storage, `articleImages/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            alert('image-uploaded')
            setImageUpload(null)
        }).catch((er) => console.log(er))

    }

    const handleChange = (e) => {
        //e may be async
        try {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [e.target.name]: e.target.value || ""
                }
            })

        } catch (er) {
            console.log(er.message)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(usersCollectionRef, formData)
            console.log('task complete');
         
            alert('task complete!')


        } catch (error) {
            console.log('task fail')
        }

    }
    return (

        <div className='account-container'>

            <div>{(user) && user.providerData[0].email}</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    placeholder='title'
                    required
                />
                <input
                    type="text"
                    value={formData.img}
                    onChange={handleChange}
                    name="img"
                    placeholder='img'
                    required
                />
                <input
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                    name="department"
                    placeholder='department'
                    required
                />
                <input
                    type="text"
                    value={formData.snippet}
                    onChange={handleChange}
                    name="snippet"
                    placeholder='snippet'
                    required
                />
                <input
                    type="text"
                    value={formData.timelength}
                    onChange={handleChange}
                    name="timelength"
                    placeholder='timelength'
                    required
                />
                <input
                    type="text"
                    value={formData.writerOne}
                    onChange={handleChange}
                    name="writerOne"
                    placeholder='writerOne'
                    required
                />
                <input
                    type="text"
                    value={formData.writerTwo}
                    onChange={handleChange}
                    name="writerTwo"
                    placeholder='writerTwo'
                />
                <textarea
                    value={formData.context}
                    placeholder="context"
                    name='context'
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    onChange={event => { setImageUpload(event.target.files[0] || "") }}
                    required />

                <button>Submit</button>
            </form>

        </div>
    )
}

export default TestUploadForm