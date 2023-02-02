import React from 'react'
import { useParams } from 'react-router-dom'
import Article from './Article'
import TestShowArticle from './TestShowArticle'

const ArticleDetailFirebase = () => {
    const {id} = useParams()
  return (
    <div> 
    {/* <TestShowArticle articleNumber = {"4OCg4yqRScVQHa6HN7Kj"}/> */}
    <TestShowArticle articleNumber = {id}/>

    </div>
  )
}

export default ArticleDetailFirebase

