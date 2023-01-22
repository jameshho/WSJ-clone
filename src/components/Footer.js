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
            <div className="footer-banner">
                <p className="to-top-button">
                    BACK TO TOP  <span>^</span>
                </p>
                <img src='../images/footer-wsj-logo.png' />
                <p>English Edition ▾</p>
                <p>Sign Out</p>
            </div>
            <div className='foot-list-outer'>

                <div className="footer-list-container">
                    {dataFooterList.map(i => {
                        return <div>{i.map(u => <p>{u}</p>)}</div>
                    })}
                </div>

            </div>
            <div className='footer-social-outer'>

                <div className="footer-social">


                    <BsFacebook size={'3.8rem'} />

                    <AiFillTwitterCircle size={'4rem'} />
                    <AiOutlineInstagram size={'4rem'} />
                    <AiFillYoutube size={'4rem'} />
                    <BiPodcast size={'4rem'} />
                    <TbBrandSnapchat size={'4rem'} />
                </div>
            </div>



            <div className="footer-other-product">

                <p>Dow Jones Products</p>

                {dataFooterProductsTwo.map(i => <p>{i}</p>)}
            </div>

            <div className="footer-other-product-two">
                {dataFooterProductsTwo.map(i => <p>{i}</p>)}
            </div>

            <div className="terms-outer">
                <div className="footer-terms">
                    {dataFooterTerms.map(i => <p>{i}</p>)}
                </div>
                <div className="footer-copyright">
                    <p>Copyright ©2023 Dow Jones & Company, Inc. All Rights Reserved.</p>
                </div>
            </div>



        </div>

    )
}

export default Footer