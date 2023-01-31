import React from 'react'

const FrontPageArticle = (prop) => {
    //prop.showImg is a boolean
    const {id,img,department,title,snippet,timelength,writer,date,context}= prop.article

    return (
        <div className="frontpagearticle-container">
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