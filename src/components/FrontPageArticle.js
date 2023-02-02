import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'


export const FrontPageArticle = (prop) => {
    //prop.showImg is a boolean
    const navigate = useNavigate()

    const codeArticle = prop.article
    const [singleArticle, setSingleArticle] = useState({})
    const [imageURL, setImageURL] = useState(null)
    
        async function fetchArticle(articleId) {
            try {
                const docRef = doc(db, 'article', articleId)
                const data = await getDoc(docRef)
                const finalSingle = data.data()
                setSingleArticle(finalSingle)
    
                const imageURL = await getDownloadURL(ref(storage, `articleImages/${finalSingle.img}`))
                setImageURL(imageURL)
            } catch (e) {
                console.error('Error fetching article: ', e)
            }
        }

    useEffect(() => {
        fetchArticle(codeArticle)
    }, [codeArticle])

    
    
    if (!singleArticle) return (<div>Loading</div>)
    const {id,title,snippet,timelength,writer}= singleArticle

    return (
        <div className="frontpagearticle-container" onClick={()=>navigate(`/testshowarticle/${codeArticle}`)}>
            <div className="frontpagearticle-container-inner">

                {(prop.showImg) && <img src={imageURL}  />}
                <h2>{title}</h2>

                <p>{snippet}</p>
                <ul>
                    <li>Heard on the Street: Netflix's New Look Is Already Catching On</li>

                </ul>
            </div>
        </div>
    )
}

// export FrontPageArticle

export const FrontSecondCard = (prop) => {


    const navigate = useNavigate()

    const codeArticle = prop.article
    const [singleArticle, setSingleArticle] = useState({})
    const [imageURL, setImageURL] = useState(null)
    
        async function fetchArticle(articleId) {
            try {
                const docRef = doc(db, 'article', articleId)
                const data = await getDoc(docRef)
                const finalSingle = data.data()
                setSingleArticle(finalSingle)
    
                const imageURL = await getDownloadURL(ref(storage, `articleImages/${finalSingle.img}`))
                setImageURL(imageURL)
            } catch (e) {
                console.error('Error fetching article: ', e)
            }
        }

    useEffect(() => {
        fetchArticle(codeArticle)
    }, [])

    
    
    if (!singleArticle) return (<div>Loading</div>)



    const {id,img,title,snippet,timelength,date}= singleArticle
    return (
        <div className="front-second-card" onClick={()=>navigate(`testshowarticle/${codeArticle}`)}>
            <h3>{title} 
                </h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p>
            <img src={imageURL} />
            <div className="timer-container">
                <img src='../images/clock.png' className='clock' />
                <p>{timelength} min read</p>
            </div>
        </div>
    )
}