import { createContext, useContext } from 'react'
// import dataArticle from '../dataSet/dataArticle'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const NewsContext = createContext()



export const NewsContextProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(workoutsReducer, { 
  //     workouts: null
  //   })
  // const dataArticle = dataArticle
  const [articles, setArticles] = useState([])
  const [allArticlesId, setAllArticlesId] = useState([])

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
      // console.log('somethings wrong with detchArticles')
    }
  }

  useEffect(() => {
    fetchArticles()
  }
    , [])

  return (
    // to pass in below
    //dataArticle is an array of objects
    <NewsContext.Provider value={{ allArticlesId }}>
      {children}
    </NewsContext.Provider>
  )
}
export const UseNewsContext = () => {
  return useContext(NewsContext)
}