import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../firebase';
import { BsTrash } from 'react-icons/bs';


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
            setFormData(prev => {
                return {
                    ...prev,
                    writerTwo: "",
                    content: ""
                }
            })
            // await alert('task complete!')

        } catch (error) {
            console.log('task fail :', error)
        }

    }


    return (

        <div className='new-article'>
            <div className="new-article-container">
                <div className="new-article-form">
                    <div className="article-form-tips">
                        <h2 className='new-article-form-greet'>Hey Jimmy, it's time to submit your article!</h2>
                        <p className='new-article-form-wrong'>Not <span>Jimmy</span>? Sign in to your account <span>here</span>.</p>

                    </div>

                    <div className='upload-status'>
                        <p>Compose Article</p>
                        <p>Supply Article Details</p>
                        <p>Review and Submit</p>
                        <p className='upload-status-absolute'>Step: 1/3</p>
                    </div>
                    <h1>Compose Article</h1>
                    <p className='compose-description'>Please complete your article and attach relevant images. </p>
                    <label>Featured Image</label>
                    <div className="new-article-image">
                        <img src="/images/im-716069-apple.jfif" />
                        <p className='image-position-absolute'>im-716069-apple.jfif</p>

                        <BsTrash size="1.5rem" className='trash-icon-absolute' />
                    </div>
                    <button className='add-img-button'>Add More Image</button>
                    <label>Title</label>
                    <input type="text" />
                    <label>Summary</label>

                    <input type="text" />
                    <label>Context</label>

                    <textarea
                        type="text"
                        placeholder=''
                        required
                    />
                </div>

            </div>
        </div>

    )
}
export default Account

{/* <input
                            type="file"
                            onChange={event => {
                                setImageUpload(event.target.files[0])
                                setImageFormData(event.target.files[0].name)
                            }}
                            required /> 
                        <label>Title</label>
                        <textarea
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            name="title"
                            placeholder='title'
                            required
                        />
                        <label>Summary</label>
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
                        */}
{/* </form> */ }



{/* <h1>This is your account email</h1>

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
           
                <label>Snippet</label>

         
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
                    type="text"
                    value={formData.img}
                    onChange={() => { }}
                    name="img"
                    placeholder='img'
                    required
                />

                <button>Submit</button>
            </form> */}


