import React from 'react'
import { useNavigate } from 'react-router-dom'

const FrontPageArticle = (prop) => {
    //prop.showImg is a boolean
    const navigate = useNavigate()
    const {id,img,department,title,snippet,timelength,writer,date,context}= prop.article

    return (
        <div className="frontpagearticle-container" onClick={()=>navigate(`/article/${id}`)}>
            <div className="frontpagearticle-container-inner">

                {(prop.showImg) && <img src={`../images/news-img/${img}`}  />}
                <h2>{title}</h2>

                <p>{snippet}</p>
                <ul>
                    <li>Heard on the Street: Netflix's New Look Is Already Catching On</li>

                </ul>
            </div>
        </div>
    )
}

export default FrontPageArticle