import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { PostContext } from '../PostContext'
import './postDetail.css'
import axios from 'axios'

function PostDetails() {
    const [comments, setComments] = useState([])
    const {post} = useContext(PostContext)
    const [posts] = post
    const {id} = useParams()
    const [username, setUsername] = useState('initialState')


    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response=>{
            console.log("response from comments :", response.data)
            setComments([...response.data])
        })

        axios.get(`https://jsonplaceholder.typicode.com/users/${posts[id-1].userId}`)
        .then(response=>{
            console.log("our user is :", response.data)
            setUsername(response.data.name)
        })
    },[])




    return (
        <div className='detail-page'>
            <section className="post-container">
                <div className="post-header">
                    <div className="left">
                        <img src="https://picsum.photos/200?random=1" alt="" />
                        <div className="author-date">
                            <span>{username}</span>
                            <span>20/11/2021</span>
                        </div>
                    </div>
                </div>
                <div className="post-title">
                    {posts[id-1].title}
                </div>
                <div className="post-body">
                    <p>{posts[id-1].body}</p>
                </div>
            </section>

            <h2>Comments :</h2>
            {
                comments.map((comment, id)=>{
                    return (
                        <section className="comments">
                            <div className="comment-header">
                                <div className="left">
                                    <img src={`https://picsum.photos/200?random=${id}`} alt="" />
                                    <p>{comment.name}</p>
                                </div>
                            </div>
                            <div className="comment-body">
                                <p>{comment.body}</p>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default PostDetails
