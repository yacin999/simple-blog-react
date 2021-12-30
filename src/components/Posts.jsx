import React, { useEffect, useContext, useState } from 'react'
import PostItem from './PostItem'
import {PostContext} from '../PostContext'
import axios from 'axios'




export default function Posts() {

    const {post} = useContext(PostContext)
    const [posts, setPosts] = post


    const [users, setUsers] = useState(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            setPosts([...response.data])
        })

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers([...response.data]))
        
        console.log("onMount posts")
    },[])


    const deletePost = (postId) => {
        setPosts(posts.filter((post)=> post.id !== postId))
    }


    return (
        <div className="posts">
            <ul>
                { 
                posts.map((post, id)=> {
                    return(
                    <li key={id}>
                        {users && <PostItem deletePost={deletePost} title={post.title} body={post.body} postId={post.id} username={users[post.userId-1].name} photoThumbnailId={id}/>}
                    </li> 
                    )
                })
                }
            </ul>
        </div>
    )
}


