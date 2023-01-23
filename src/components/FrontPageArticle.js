import React from 'react'

const FrontPageArticle = (prop) => {
    return (
        <div className="subcontainer-article-container">
            <div className='frontpage-article'>

                {(prop.showImg) && <img src='../images/news-img/3-war.jfif' className='frontpage-article-img' />}
                <h2 className='frontpage-article-title'>Netflix Co-CEO Hastings Shifts to Chairman Role</h2>
                <p>Netflix elevated longtime executive and</p>
                <ul>
                    <li>Heard on the Street: Netflix's New Look Is Already Catching On</li>

                </ul>
            </div>
        </div>
    )
}

export default FrontPageArticle