import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../firebase';


import { db } from '../firebase';

const Account = () => {
    const { user, logout } = UserAuth()
    const [imageUpload, setImageUpload] = useState(null)

    const [imageURL, setImageURL] = useState(null)

    const [formData, setFormData] = useState({
        img: 'img.png',
        department: 'department',
        title: 'title',
        snippet: 'snippet',
        timelength: 8,
        writerOne: 'writerOne',
        writerTwo: '',
        content: 'writerTwo'


    })
    const usersCollectionRef = collection(db, "article")


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

    //beginning of testing
    const setImageFormData = (imgFileName) => {
        setFormData((prevFormData) => {
            return { ...prevFormData, img: imgFileName || "" }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!imageUpload) return;
        try {
            const imageRef = ref(storage, `articleImages/${imageUpload.name}`);
            const snapshot = await uploadBytes(imageRef, imageUpload)
            await addDoc(usersCollectionRef, formData)
            

            setImageUpload(null)
            setFormData(prev=>{
                return {...prev,
                writerTwo:"",
                content:""}
            })
            // await alert('task complete!')

        } catch (error) {
            console.log('task fail :', error)
        }

    }


    return (

        <div className='account-container'>
            <h1>This is your account email</h1>

            <div>{(user) && user.providerData[0].email}</div>
            <button onClick={logout}>Sign Out</button>

            <form onSubmit={handleSubmit}>

                <label>Department</label>

                <input
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                    name="department"
                    placeholder='department'
                    required
                />
                <label>Time</label>

                <input
                    type="number"
                    value={formData.timelength}
                    onChange={handleChange}
                    name="timelength"
                    placeholder='timelength'
                    required
                />
                <label>Writer</label>
                <div className='writers'>

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
                </div>
                <label>Title</label>
                <textarea
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    placeholder='title'
                    required
                />
                <label>Snippet</label>

                <textarea
                    type="text"
                    value={formData.snippet}
                    onChange={handleChange}
                    name="snippet"
                    placeholder='snippet'
                    required
                />
                <label>Content</label>

                <textarea
                    value={formData.content}
                    placeholder="content"
                    name='content'
                    onChange={handleChange}
                    wrap="soft"
                    rows="12"
                    cols="10"
                    required
                />
                <input
                    type="file"
                    onChange={event => {
                        setImageUpload(event.target.files[0])
                        setImageFormData(event.target.files[0].name)
                    }}
                    required />
                <input
                    type="text"
                    value={formData.img}
                    onChange={() => { }}
                    name="img"
                    placeholder='img'
                    required
                />

                <button>Submit</button>
            </form>

        </div>
    )
}

export default Account