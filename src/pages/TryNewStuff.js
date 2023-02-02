import React from 'react'
import { UseNewsContext } from '../context/NewsContext'

const TryNewStuff = () => {

    const {allArticlesId} = UseNewsContext()
    console.log(allArticlesId)
  return (
    <div>{allArticlesId}</div>
  )
}

export default TryNewStuff