import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PostDetails from "./pages/PostDetails";
import {PostProvider} from './PostContext'
import PostsPage from "./pages/PostsPage";


function App() {

  return (
    <PostProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/posts' element={<PostsPage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path="/post/:id" element={<PostDetails/>}/>
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
