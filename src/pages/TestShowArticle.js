import BottomCard from '../components/BottomCard'
import ArticleRight from '../components/ArticleRight'
import SocialPanel from '../components/SocialPanel'
import { useParams } from 'react-router-dom';
import { useArticle } from '../hooks/useArticle';
import { UseNewsContext } from '../context/NewsContext';



const TestShowArticle = () => {


  const { allArticlesId } = UseNewsContext()

  //new part
  const { id } = useParams();
  const { singleArticle, imageURL } = useArticle(id);

  if (!singleArticle) return (<div>Loading</div>)
  const { img, department, title, snippet, writerOne, writerTwo, content } = singleArticle;


  return (
    <div className='fixed-article-container'>
      <div className='position-absolute' >
        <SocialPanel />
      </div>
      <div className='main-left'>
        <h1 className='article-title'>{title}</h1>
        <h3 className='article-snippet'>{snippet}</h3>
        {/* <h1>HELLO</h1> */}

        <img src={imageURL} className='main-image' />
        <p className='photo-des'>President Biden, who spoke Monday the White House, has seen his approval rating hampered by high prices for energy, among other factors.</p>
        <p className='photo-des'>PHOTO: ALEX BRANDON/ASSOCIATED PRESS</p>
        <div className='article-center-block'>

          {/* <p>{`By ${writerOne} ${(writerTwo) && " and " + writerTwo}`}</p> */}
<p className='article-author'>By <span>Andrew Restuccia</span> and <span>Collin Eaton</span></p>
          {/* <p>{`Updated ${date}`}</p> */}
          <p>Updated Oct. 31, 2022 6:00 pm ET</p>
          {/* <div className="article-save-icons">
            <p>SAVE</p>
            <p>PRINT</p>
            <p>TEXT</p>
            <p>COMMENT</p>
          </div> */}
          <img src="/images/save-icons.png" className='save-icons' />



          <div className='article-listen-bar'>
            <div className='article-listen-icon'>▶</div>
            <p className='article-listen-title'> Listen to article </p>
            <p className='article-listen-time'>(7 minutes)</p>
            <p className='article-listen-queue'>Queue</p>
          </div>

          <div className='main-content'>
            {(content) && content.split('\\n').map((i, index) => <p key={index}>{i}</p>)}



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
        <ArticleRight article={allArticlesId.slice(13, 18)} headline={'MOST POPULAR NEWS'} />
        <ArticleRight article={allArticlesId.slice(1, 6)} headline={"TOP STORIES OF THE DAY"} />


      </div>
    </div>


  )
}

export default TestShowArticle