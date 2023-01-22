import React from 'react'
import dataArticle from '../dataSet/dataArticle'
import ArticleRight from '../components/ArticleRight'
import SocialPanel from '../components/SocialPanel'




const BottomCard = () => {
  return (
    <div className='bottom-grid-card'>
      <img src='../images/google-news.jfif' className='bottom-card-img' />
      <p className='bottom-grid-card-text'>Life After a Layoff: Assessing the Horizon</p>
    </div>
  )
}

const Article = () => {
  const theTag = "TECH"
  const { img, department, title, snippet, writer, date, context } = dataArticle
  const articleTitle = ""
  const articleSnippet = ''
  // const artic
  return (
    <div>
      <div className='article-container'>
        <div className='position-absolute' >
          <SocialPanel />
        </div>
        <div>

          <p className='article-department'>{department}</p>
          <h1 className='article-title'>{title}</h1>

          <p className='article-snippet'>{snippet}</p>
        </div>
        <div className='main-left'>

          <img src={`../images/${img}`} className='main-image' />
          <p className='photo-des'>The job reductions at Google parent Alphabet will cut across its units and regions.</p>
          <p className='photo-des'>PHOTO: DAVID PAUL MORRIS/BLOOMBERG NEWS</p>
          <div className='article-center-block'>
          <p>{`By ${writer[0]}${(writer[1]) && " and " + writer[1]}`}</p>
            <p>{`Updated ${date}`}</p>
            <div className="article-save-icons">
              <p>SAVE</p>
              <p>PRINT</p>
              <p>TEXT</p>
              <p>COMMENT</p>
            </div>

            <div className='article-listen-bar'>
              <div className='article-listen-icon'>▶</div>
              <p className='article-listen-title'> Listen to article </p>
              <p className='article-listen-time'>(7 minutes)</p>
              <p className='article-listen-queue'>Queue</p>
            </div>
            <div className='main-content'>
              {dataArticle.context.split('\n').map(i => <p>{i}</p>)}

            </div>

            <div className='main-left-bottom'>

              <p className="bottom-title">Rising Wave of Layoffs</p>
              <p className="bottom-des">Advice and insights as companies cut back, selected by the editors</p>
              <div className="main-left-bottom-grid">
                <BottomCard />
                <BottomCard />
                <BottomCard />
                <BottomCard />
                <BottomCard />
                <BottomCard />
                <BottomCard />
                <BottomCard />



              </div>

            </div>
            <div className='show-convo-container'>

              <p className='show-convo'>SHOW CONVERSATION (185) &#709; </p>
            </div>

          </div>
        </div>
        <div>
          <ArticleRight />
          <ArticleRight />
          <ArticleRight />
          <ArticleRight />
          <ArticleRight />
        </div>
      </div>
    </div>

  )
}

export default Article