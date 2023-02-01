import React from 'react'
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, collection, getDocs  } from 'firebase/firestore';
import { UseNewsContext } from '../context/NewsContext';


const TryArticle = () => {
    const [allArticlesId, setAllArticlesId] = useState([])

    const [singleArticle, setSingleArticle] = useState({})

    //all article id

    const articlesCollectionRef = collection(db, "article")

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

    useEffect(() => {
        fetchArticles()
    }
        , [])


    const articleId = '5gxaIEZ1ikEj7LRrQpqY'
    async function fetchArticle() {
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

        </div>
    )
}
export default TryArticle

