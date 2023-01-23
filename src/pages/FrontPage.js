import React from 'react'
import ArticleRight from '../components/ArticleRight'
import FrontPageArticle from '../components/FrontPageArticle'



const FrontSecondCard = () => {
    return (
        <div className="front-second-card">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p>
            <img src='../images/news-img/3-war.jfif' className='front-second-card-img' />
            <div className="timer-container">
                <img src='../images/clock.png' className='clock' /><p className='timer-time'>6 min read</p>
            </div>
        </div>
    )
}

const FrontPage = () => {
    return (
        <div className='bigbigbig-container'>
            <div className="bigbig-container">

                <div className='market-main-container'>

                    <div className='top-main-subcontainer'>
         

                        <FrontPageArticle showImg={true} />
                        <FrontPageArticle />
                        <FrontPageArticle />
                        <FrontPageArticle />
                        <FrontPageArticle />
                        <FrontPageArticle />
                        <div className="subcontainer-article-last"> </div>


                    </div>
                    <div className='top-second-subcontainer'>
                        <FrontSecondCard />

                        <FrontSecondCard />
                        <FrontSecondCard />
                        <FrontSecondCard />


                    </div>

                </div>
                <div className="third-main">
                    <div className='third-container'>
                        <ArticleRight />

                    </div>
                    <div className='third-container'>
                        <ArticleRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage