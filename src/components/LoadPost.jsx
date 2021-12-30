import React, {useContext, useState} from 'react'
import { PostContext } from '../PostContext'



function LoadPost() {


    const {loading} = useContext(PostContext)
    const [isLoading] = loading

    return (
        <div>
            {
            isLoading && <div className="loading-cover">
                <span className='loading'></span>
            </div>
            }
        </div>
    )
}

export default LoadPost
