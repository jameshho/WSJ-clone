import React from 'react'
import FrontPageArticle from '../components/FrontPageArticle'
import SocialPanel from '../components/SocialPanel'
import ArticleRight from '../components/ArticleRight'




export const RightEle = () => {
    return (
        <div>

            <img src='../images/news-img/10-china.jfif' />
            <h3>Baldwin to Be Charged With Involuntary Manslaughter in 'Rust' Shooting</h3>
            <div className="timer">
                <img src='../images/clock.png' className='clock' /><p className='timer-time'>6 min read</p>
            </div>
        </div>
    )
}

{/* Add it back to front page<div className='positionFixed'>

<SocialPanel />

</div> */}



const FrontPage = () => {
    return (
        <div className="frontpage-container">
            <div className="frontpage-container">


                <div className="col-1">

                    <div className='frontpage-article'>

                        <img src='../images/netflix.png' />
                        <h2>Netflix Co-CEO Hastings Shifts to Chairman Role</h2>
                        <p>Netflix elevated longtime executive and heir apparent Greg Peters to the co-CEO role, succeeding co-founder Reed Hastings. The streaming giant also said it added 7.7 million net new subscribers in the fourth quarter, more than expected. Shares rose more than 6% after hours.</p>
                        <ul>
                            <li>Heard on the Street: Netflix's New Look Is Already Catching On</li>
                            <li>The $385,000 Flight Attendant for Netflix's Private Jet</li>
                        </ul>
                    </div>
                    <FrontPageArticle />
                </div>

                <div className="col-2">

                    <FrontPageArticle />
                    <FrontPageArticle />

                </div>
                <div className="col-3">
                    <RightEle />
                    <RightEle />
                    <RightEle />
                    <RightEle />

                </div>
            </div>

            <div className="col-4">
                <ArticleRight />
                <ArticleRight />
                <ArticleRight />
                <ArticleRight />


            </div>


        </div>
    )
}

export default FrontPage