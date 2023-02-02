import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArticleRight from '../components/ArticleRight'
import {FrontPageArticle ,FrontSecondCard} from '../components/FrontPageArticle'
import { UseNewsContext } from '../context/NewsContext'
import dataArticle from '../dataSet/dataArticle'


// const FrontSecondCard = (prop) => {
//     const navigate = useNavigate()
//     const {id,img,title,snippet,timelength,date}= prop.article
//     return (
//         <div className="front-second-card" onClick={()=>navigate(`article/${id}`)}>
//             <h3>{title} 
//                 </h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p>
//             <img src={`../images/news-img/${img}`} />
//             <div className="timer-container">
//                 <img src='../images/clock.png' className='clock' />
//                 <p>{timelength} min read</p>
//             </div>
//         </div>
//     )
// }

const FrontPage = () => {
    const {allArticlesId} = UseNewsContext()
    
    return (
        <div className='frontpage-container'>

            <div className='frontpage-container-left'>

                <div className='top-main-subcontainer'>

                    
                    <FrontPageArticle article={allArticlesId[0]} showImg={true}   />
                    {allArticlesId.map((i,index)=><FrontPageArticle article={i} key={i.id} />)}
                
                </div>
                <div className='top-second-subcontainer'>
                {allArticlesId.slice(4,8).map((i,index)=><FrontSecondCard  article={i} key={i.id} />)}
                  


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