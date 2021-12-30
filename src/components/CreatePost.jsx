import React, { useState, useEffect, useRef , useContext} from 'react'
import './post.css'
import {PostContext} from '../PostContext'


function CreatePost() {
    const {post, loading} = useContext(PostContext)

    const [posts, setPosts] = post
    const [isLoading, setIsLoading] = loading
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [showMessage, setShowMessage] = useState(false)

    const createPost = (e) => {
        e.preventDefault()

        setIsLoading(true)

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method : 'POST',
            body: JSON.stringify({
                title : title,
                body: body,
            }),
            headers : {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res=> res.json())
        .then(data=> {
            setShowMessage(true)
            setIsLoading(false)
            setTitle('')
            setBody('')
            console.log("data", data)
            setPosts([...posts, {userId : Math.floor(Math.random() * 10) ,id : data.id, title: data.title, body : data.body}])
        })
        .catch(err=> console.log("something went wrong !!"))
    }


    useEffect(() => {
        console.log("testing show message :", showMessage)
        setTimeout(()=> {
            setShowMessage(false)
        },5050)
      
    }, [showMessage])
    return (
        <div className='create-post'>
            {showMessage && <p className='creating-post-message'>Congratulations, you have created a new Post<span onClick={()=>setShowMessage(false)}>x</span></p>}
            <h2>Create new post</h2>
            <form onSubmit={createPost}>
                <input type="text" placeholder="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                <textarea name="body" id="" rows="10" placeholder="Write your post in here ..." value={body} onChange={e=> setBody(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreatePost
