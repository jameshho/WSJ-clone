import React from 'react'
import { useState } from 'react'


const NavIndex = ({ navIndex, value }) => {
    const [disState, setDisState] = React.useState(false)


    return (
        <div>

            <div
                onMouseEnter={()=>setDisState(true)}
                onMouseLeave={()=>setDisState(false)}
                onWheel={()=>setDisState(false)}

                className='index-label'
            >
              
                <p className='index-heading'>{navIndex}</p>

                {(disState) && (
                    <div className='unorderedList'>
                        <div></div>
                        <div>
                            <ul className='index-element'>
                                {(value[0] && value[0].length !== 0) && value[0].map(i => <li>{i}</li>)}

                            </ul>
                        </div>
                        <div>
                            <ul className='index-element'>
                                {(value[1] && value[1].length !== 0) && value[1].map(i => <li>{i}</li>)}
                            </ul>
                        </div>
                        <div>
                            <ul className='index-element'>
                                {(value[3] && value[3].length !== 0) && value[2].map(i => <li>{i}</li>)}
                            </ul>
                        </div>


                    </div>
                )}

            </div>
        </div >
    )
}

export default NavIndex