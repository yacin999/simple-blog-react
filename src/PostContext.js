import React, {useState, createContext} from "react";


export const PostContext = createContext()

export const PostProvider = props => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    



    return (
        <PostContext.Provider value={{ post: [posts, setPosts], loading: [isLoading, setIsLoading] }}>
            {props.children}
        </PostContext.Provider>
    )
}


