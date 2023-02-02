import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import BottomCard from '../components/BottomCard'
import ArticleRight from '../components/ArticleRight'
import SocialPanel from '../components/SocialPanel'



const TestShowArticle = (prop) => {
    const [singleArticle, setSingleArticle] = useState({})

    const code = prop.articleNumber
    const [imageURL, setImageURL] = useState(null)

    //testing area

    async function fetchArticle(articleId) {
        try {
            const docRef = doc(db, 'article', articleId)
            const data = await getDoc(docRef)
            const finalSingle = data.data()
            setSingleArticle(finalSingle)

            const imageURL = await getDownloadURL(ref(storage, `articleImages/${finalSingle.img}`))
            setImageURL(imageURL)
        } catch (e) {
            console.error('Error fetching article: ', e)
        }
    }


    useEffect(() => {
        fetchArticle('4OCg4yqRScVQHa6HN7Kj')
    }, [])

    if (!singleArticle) return (<div>Loading</div>)
    const { img, department, title, snippet, writerOne, writerTwo, content } = singleArticle


    // <img src={imageURL} />


    return (
        <div className='fixed-article-container'>
        <div className='position-absolute' >
          <SocialPanel />
        </div>
        <div className='main-left'>
          <h1 className='article-title'>{title}</h1>
          <h3 className='article-snippet'>{snippet}</h3>
          <img src={imageURL} className='main-image' />
          <p className='photo-des'>The job reductions at Google parent Alphabet will cut across its units and regions.</p>
          <p className='photo-des'>PHOTO: DAVID PAUL MORRIS/BLOOMBERG NEWS</p>
          <div className='article-center-block'>

            <p>{`By ${writerOne} ${(writerTwo) && " and " + writerTwo}`}</p>
            
            {/* <p>{`Updated ${date}`}</p> */}
            <p>Updated Jan. 20, 2023 2:44 pm ET</p>
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
              {(content) && content.split('\\n').map((i,index) => <p key = {index}>{i}</p>)}


  
            </div>
  
            <div className='main-left-bottom'>
  
              <p className="bottom-title">Rising Wave of Layoffs</p>
              <p className="bottom-des">Advice and insights as companies cut back, selected by the editors</p>
            </div>
            <div className='bottom-cq-container'>
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
  
  
  
  
        <div className='display-bottom-g'>
          <ArticleRight />
          <ArticleRight />
  
        </div>
      </div>
  
  
    )
}

export default TestShowArticle