import React from 'react'
import ArticleRight from '../components/ArticleRight'
import FrontPageArticle from '../components/FrontPageArticle'
import dataArticle from '../dataSet/dataArticle'


const FrontSecondCard = (prop) => {
    const {id,img,department,title,snippet,timelength,writer,date,context}= prop.article
    return (
        <div className="front-second-card" onClick={()=>console.log(id)}>
            <h3>{title} 
                </h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p>
            <img src={`../images/news-img/${img}`} />
            <div className="timer-container">
                <img src='../images/clock.png' className='clock' />
                <p>{timelength} min read</p>
            </div>
        </div>
    )
}

const FrontPage = () => {
    
    return (
        <div className='frontpage-container'>

            <div className='frontpage-container-left'>

                <div className='top-main-subcontainer'>


                    <FrontPageArticle article={dataArticle[7]} showImg={true}   />
                    {dataArticle.map((i,index)=><FrontPageArticle article={i} key={i.id} />)}
                



                </div>
                <div className='top-second-subcontainer'>
                {dataArticle.slice(4,9).map((i,index)=><FrontSecondCard  article={i} key={i.id} />)}
                    {/* <FrontSecondCard />

                    <FrontSecondCard />
                    <FrontSecondCard />
                    <FrontSecondCard /> */}


                </div>

            </div>
            <div className="right-article-col">
                <ArticleRight />

                <ArticleRight />
            </div>
        </div>
    )
}

export default FrontPage