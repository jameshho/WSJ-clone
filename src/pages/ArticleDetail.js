import React from 'react'
import { useParams } from 'react-router-dom'
import Article from './Article'

const ArticleDetail = () => {
    const {id} = useParams()
  return (
    <div> 
    <Article articleNumber = {id}/>
    </div>
  )
}

export default ArticleDetail