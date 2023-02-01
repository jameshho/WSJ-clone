import React from 'react'
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';



const TryArticle = () => {
    const [allArticlesId, setAllArticlesId] = useState([])

    const [singleArticle, setSingleArticle] = useState({})
    const [imageURL, setImageURL] = useState(null)


    //all article id

    const articlesCollectionRef = collection(db, "article")

    //given image name, get file
    async function fetchArticles() {
        try {
            const data = await getDocs(articlesCollectionRef)
            data.docs.forEach((doc) => {
                setAllArticlesId((prev) => [...prev, doc.id])
            })
            console.log(allArticlesId)

        } catch (er) {
            console.log(er, 'somethings wrong')
        }
    }
    //given image name, get file
    async function fetchImage() {
        const imageName = "main-beagle.png"
        try {
            const theURL = await getDownloadURL(ref(storage, `articleImages/${imageName}`))
            setImageURL(theURL)

        } catch (er) {
            console.log(er.message)
        }
    }

    useEffect(() => {
        fetchArticles()
        fetchImage()
    }
        , [])





    async function fetchArticle() {
        const articleId = 'd0GkiNql4EhF0w1kdJEU'
        const docRef = doc(db, 'article', articleId)
        const data = await getDoc(docRef)
        setSingleArticle(data.data())
    }
    useEffect(() => {
        fetchArticle()
    }, [])

    if (!singleArticle) return (<div>Loading</div>);

    const { title, author } = singleArticle
    return (
        <div>

            <div>Hello</div>
            <div>{title}</div>
            <div>{author}</div>
            {allArticlesId && allArticlesId.map((i) => {
                return <div>{i}</div>
            })}
            {(imageURL) && <img src={imageURL} />}

        </div>
    )
}
export default TryArticle

