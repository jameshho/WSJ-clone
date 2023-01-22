import React from 'react'

const SocialPanel = () => {
    return (
        <div>

            <div className="panel-container">
                <div className='panel-share'><p>SHARE</p></div>
                <div className='one-icon'>
                    <div className='panel-logo'><img
                        src='../images/facebook-logo.png'
                        className='panel-img'
                    />
                    </div>
                    <p className="panel-name">FACEBOOK</p>

                   
                </div>
                <div className='one-icon'>
                    <div className='panel-logo'><img
                        src='../images/twitter-logo.png'
                        className='panel-img'
                    />
                    </div>
                    <p className="panel-name">TWITTER</p>

                   
                </div>
                <div className='one-icon'>
                    <div className='panel-logo'><img
                        src='../images/linkedin-logo.png'
                        className='panel-img'
                    />
                    </div>
                    <p className="panel-name">LINKEDIN</p>

                   
                </div>
                <div className='one-icon'>
                    <div className='panel-logo'><img
                        src='../images/link-icon.png'
                        className='panel-img'
                    />
                    </div>
                    <p className="panel-name">COPY FREE LINK</p>

                   
                </div>
                <div className='one-icon'>
                    <div className='panel-logo'><img
                        src='../images/mail-icon.png'
                        className='panel-img'
                    />
                    </div>
                    <p className="panel-name">EMAIL</p>

                   
                </div>


            </div>

        </div>
    )
}

export default SocialPanel