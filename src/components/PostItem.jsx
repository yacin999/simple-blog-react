
import { MoreHorizOutlined } from '@mui/icons-material'
import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import './post.css'



function PostItem({deletePost, title, body, postId, username, photoThumbnailId}) {

    const [popUp, setPopUp] = useState(false)

    const showPopup = () => {
        if (popUp) {
            setPopUp(false)
        }else {
            setPopUp(true)
        }
    }

    

    return (
        <>
        <div className="upper">
            <div className="profile">
                <img src={`https://picsum.photos/200?random=${photoThumbnailId}`} alt="" className="img"/>
                <p className="username">{username}</p>
            </div>

            <MoreHorizOutlined className='param-icon' onClick={showPopup}/>

           {popUp && (
                <div className="par-popup">
                    <span onClick={() => deletePost(postId)}>delete</span>
                </div>
                )}
            
        </div>
            <p className='title'>{title}</p>
            <div className="body">
                {body.substring(0, 100) + "..."}
            </div>
            <div className="read-more">
                <span >
                    <Link to={`/post/${postId}`}>Read more</Link>
                </span>
            </div>
           
        </>
    )
}

export default PostItem
