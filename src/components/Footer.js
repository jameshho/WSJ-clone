import React from 'react'
import { dataFooterList, dataFooterProducts, dataFooterTerms, dataFooterProductsTwo } from '../dataSet/dataFooter'
import { BsFacebook } from "react-icons/bs";

import { AiFillTwitterCircle, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BiPodcast } from "react-icons/bi";
import { TbBrandSnapchat } from "react-icons/tb";

const Footer = () => {

    const array1 = dataFooterList[0]
    return (



        <div className='footer-container'>

            <div className="narrow-to-top">
                <div><p>BACK TO TOP</p></div>
            </div>
            <div className="footer-banner">
               
                <img src='../images/footer-wsj-logo.png' />
                <p className='english-edition'>English Edition ▾</p>
                <div className='footer-sign-out'><p>Sign Out</p>
                    <p className="to-top-button"
                        onClick={() => { window.scrollTo(0, 0) }}>
                        BACK TO TOP  <span>^</span>
                    </p></div>
            </div>
            <div className='footer-list-outer'>
                <div className="footer-list-container">
                    {dataFooterList.map(i => {
                        return <div>{i.map(u => <p>{u}</p>)}</div>
                    })}
                </div>
            </div>

            <div className='footer-social-outer'>
                <div className="footer-social-inner">
                    <BsFacebook size={'3.8rem'} />
                    <AiFillTwitterCircle size={'4rem'} />
                    <AiOutlineInstagram size={'4rem'} />
                    <AiFillYoutube size={'4rem'} />
                    <BiPodcast size={'4rem'} />
                    <TbBrandSnapchat size={'4rem'} />
                    <div className="footer-social-text">
                        <p>WSJ Memebership Benefits</p>
                        <p>Customer Center</p>
                        <p>Cancel My Subscription</p>
                        <p>Legal Policies</p>

                    </div>
                    <div className='social-button google-button'>
                    </div>
                    <div className='social-button apple-button'>
                    </div>
                </div>
            </div>


            <div className="footer-other-product">
                <p>Dow Jones Products</p>
                {dataFooterProductsTwo.map(i => <p>{i}</p>)}
            </div>
            <div className="footer-other-product-two">
                {dataFooterProductsTwo.map(i => <p>{i}</p>)}
            </div>
            <div className="footer-terms-outer">
                <div className="footer-terms">
                    {dataFooterTerms.map(i => <p>{i}</p>)}
                </div>

            </div>
            <div className="footer-copyright">
                <p>Copyright ©2023 Dow Jones & Company, Inc. All Rights Reserved.</p>
            </div>



        </div>

    )
}

export default Footer