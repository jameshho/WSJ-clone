import React from 'react'


const title = "China's Global Mega-Projects Are Falling Apart"



const BottomRightCard = ({ num }) => {
    return (
        <div className="popular-news-container">
            <h3 className='popular-news-number'>{num + "."}</h3>
            <p className='article-right-title'>{title}</p>
            <img className='article-right-img' src='../images/news-img/2-biden.jfif' />
        </div>
    )
}


const ArticleRight = () => {
    // const rightArticleHeading = 'MOST POPULAR OPINION'
    const rightArticleHeading = 'MOST POPULAR NEWS'

    return (
        <div className='article-right-container'>
            <h2 className='article-right-title'>{rightArticleHeading}</h2>
            <BottomRightCard num={1} />
            <BottomRightCard num={2} />
            <BottomRightCard num={3} />
            <BottomRightCard num={4} />
            <BottomRightCard num={5} />






        </div>
    )
}

export default ArticleRight