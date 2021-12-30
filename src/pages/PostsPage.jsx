import CreatePost from '../components/CreatePost'
import LoadPost from '../components/LoadPost'
import Posts from '../components/Posts'
import './postsPage.css'

function PostsPage() {
    return (
        <div className='posts-page'>
            <LoadPost/>
            <div className="content">
                <div className="sidebar">
                    <ul>
                        <li>Comments</li>
                        <li>My todos</li>
                        <li>Albums</li>
                    </ul>
                </div>
                <div className="right-part">
                    <CreatePost/>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}

export default PostsPage
