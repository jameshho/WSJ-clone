import React from 'react'
import dataArticle from '../dataSet/dataArticle'


const BottomCard = () => {
    const randomNumber = +(Math.random()*9).toFixed(0)
    return (
      <div className='bottom-grid-card'>
        <img src={`../images/news-img/${dataArticle[randomNumber].img}`} className='bottom-card-img' />
        <p className='bottom-grid-card-text'>{dataArticle[randomNumber].title}</p>
  
        {/* <img src='../images/news-img/4-google.jfif' className='bottom-card-img' />
        <p className='bottom-grid-card-text'>Life After a Layoff: Assessing the Horizon</p> */}
      </div>
    )
  }


  export default BottomCard