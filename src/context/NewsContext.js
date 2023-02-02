import { createContext, useContext } from 'react'
// import dataArticle from '../dataSet/dataArticle'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const NewsContext = createContext()

export const NewsContextProvider = ({ children }) => {

  const [articles, setArticles] = useState([])
  const [allArticlesId, setAllArticlesId] = useState([])

  const articlesCollectionRef = collection(db, "article")

  async function fetchArticles() {
    try {
      const data = await getDocs(articlesCollectionRef)
      await data.docs.forEach((doc) => {
        (allArticlesId)?setAllArticlesId((prev) => [...prev, doc.id]):
        setAllArticlesId([doc.id])
      })
      await setAllArticlesId((prev) => prev.sort(() => Math.random() - 0.5))

      await console.log(allArticlesId)

    } catch (er) {
      console.log(er, 'somethings wrong')
    }
  }

  useEffect(() => {
    fetchArticles()
  }
    , [])
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (

    <NewsContext.Provider value={{ allArticlesId }}>
      {children}
    </NewsContext.Provider>
  )
}
export const UseNewsContext = () => {
  return useContext(NewsContext)
}
