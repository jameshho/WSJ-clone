import React from 'react'
import { useNavigate } from 'react-router-dom'
import dataArticle from '../dataSet/dataArticle'

const title = "China's Global Mega-Projects Are Falling Apart"



const BottomRightCard = ({ num, article }) => {
    const navigate = useNavigate()
    return (
        <div className="popular-news-container" onClick={() => navigate(`/article/${article.id}`)}>
            <h3 className='popular-news-number'>{num + "."}</h3>
            <p className='article-right-title'>{article.title}</p>
            <img className='article-right-img' src={`../images/news-img/${article.img}`} />
        </div>
    )
}


const ArticleRight = () => {
    // const rightArticleHeading = 'MOST POPULAR OPINION'
    const rightArticleHeading = 'MOST POPULAR NEWS'

    return (
        <div className='article-right-container'>
            <h2 className='article-right-title'>{rightArticleHeading}</h2>
            {dataArticle.slice(5, 10).map((i, index) => <BottomRightCard key={index} num={index + 1} article={i} />)}
            {/* <BottomRightCard num={1} />
            <BottomRightCard num={2} />
            <BottomRightCard num={3} />
            <BottomRightCard num={4} />
            <BottomRightCard num={5} /> */}

        </div>
    )
}

export default ArticleRight