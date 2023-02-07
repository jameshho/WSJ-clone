import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UseNewsContext } from '../context/NewsContext';
import dataArticle from '../dataSet/dataArticle'
import { useArticle } from '../hooks/useArticle';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';

//new part


//based on 5 ids, get an array of 5 url and 5 titles


const BottomRightCard = ({ article ,num}) => {
    const navigate = useNavigate()
    const { singleArticle, imageURL } = useArticle(article);
    const {title} = singleArticle
    return (
        <div className="popular-news-container" onClick={() => navigate(`/testshowarticle/${article}`)}>
            <h3 className='popular-news-number'>{num + "."}</h3>
            <p className='article-right-title'>{title}</p>
            <img className='article-right-img' src={imageURL} />
        </div>
     )
}


const ArticleRight = ({article,headline}) => {
    
    const rightArticleHeading = headline
    if(!article) return <div>Loading</div>
    return (
        <div className='article-right-container'>
            <h2 className='article-right-title'>{rightArticleHeading}</h2>
            {article.map((i, index) => <BottomRightCard key={index} article={i} num={index+1}/>)}


        </div>
    )
}

export default ArticleRight