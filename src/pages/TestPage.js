import React from 'react'
import ArticleRight from '../components/ArticleRight'
import FrontPageArticle from '../components/FrontPageArticle'
const TestPage = () => {
    return (
        <div className="bigbig-container">

            <div className='market-main-container'>

                <div className='top-main-subcontainer '>
                    <div className="subcontainer-article-container"><FrontPageArticle/></div>
                    <div className="subcontainer-article-container"><FrontPageArticle/></div>
                    <div className="subcontainer-article-container"><FrontPageArticle/></div>
                    <div className="subcontainer-article-container"><FrontPageArticle/></div>
                    <div className="subcontainer-article-container"><FrontPageArticle/></div>
                    <div className="subcontainer-article-container"><FrontPageArticle/></div>
                    
                    <div className="hiddenline"></div>
                    {/* <div className="item7"><h3>Item 1 Title</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p></div> */}

                </div>
                <div className='top-second-subcontainer'>
                    <div className="item8"><h3>Item 8 Title</h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p></div>
                    <div className="item9"><h3>Item 9 Title</h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p></div>
                    <div className="item10"><h3>Item 10 Title</h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p></div>
                    <div className="item11"><h3>Item 11 Title</h3><p>Iste doloribus aliquam voluptas officia ipsam ut perferendis, harum voluptatibus mollitia, eos reprehenderit sequi id earum sunt vero ea aperiam! Quae, eaque.</p></div>
                    {/* <div className="item12">Item 12</div>
    <div className="item13">Item 13</div>
    <div className="item14">Item 14</div> */}
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
    )
}

export default TestPage