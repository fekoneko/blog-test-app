import './styles/App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Missing from './pages/Missing';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Test Post 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore cum maxime explicabo soluta porro dignissimos illo commodi unde consectetur laboriosam possimus veritatis, necessitatibus dolores doloribus reiciendis incidunt suscipit quisquam.',
      author: 'fekoneko',
      publishTime: 0,
    },
    {
      id: 2,
      title: 'Test Post 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore cum maxime explicabo soluta porro dignissimos illo commodi unde consectetur laboriosam possimus veritatis, necessitatibus dolores doloribus reiciendis incidunt suscipit quisquam.',
      author: 'fekoneko',
      publishTime: 0,
    },
    {
      id: 3,
      title: 'Test Post 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore cum maxime explicabo soluta porro dignissimos illo commodi unde consectetur laboriosam possimus veritatis, necessitatibus dolores doloribus reiciendis incidunt suscipit quisquam.',
      author: 'fekoneko',
      publishTime: 0,
    },
  ]);

  const [displayedPosts, setDisplayedPosts] = useState(posts);

  const [searchRequest, setSearchRequest] = useState('');

  const handleSearch = (request) => {
    request = request.replace('&', '').replace('#', '').replace('%', '');
    setSearchRequest(request); // Needed because in query params spaces are trimmed
    if (request.replace(/\s+$/, '')) navigate(`/?s=${request}`);
    else navigate('/');
  }

  useEffect(() => {
    if (!searchRequest) {
      setDisplayedPosts(posts);
      return;
    }
    const result = posts.filter((post) => (
      searchRequest.split(',').map((requestPartFull) => {
        const requestPart = requestPartFull.trim();
        const requestPartLowercase = requestPart.toLowerCase();
        const postDate = new Date(post.publishTime);
        return (
          requestPart && (post.id === +requestPart ||
            postDate.toDateString().toLowerCase() === requestPartLowercase ||
            post.title.toLowerCase().includes(requestPartLowercase) ||
            post.content.toLowerCase().includes(requestPartLowercase) ||
            post.author.toLowerCase().includes(requestPartLowercase))
        );
      }).some((meetRequestParts) => meetRequestParts)
    ));
    setDisplayedPosts(result);
  }, [searchRequest, posts]);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!location.search) {
      if (searchRequest.replace(/\s+$/, '') !== '') setSearchRequest('');
      return;
    }
    const params = new URLSearchParams(location.search);
    if (searchRequest.replace(/\s+$/, '') !== params.get('s')) setSearchRequest(params.get('s'));
  }, [location.search, searchRequest]);

  const serverAddPost = (newPost) => {
    // Must give newPost available ID at server and return it
    // RequestId() or something
    return posts[posts.length - 1].id + 1; // Just a placeholder
  }

  const handleCreatePost = (newPost) => {
    const date = new Date();
    if (!newPost.content) return; // Required
    if (!newPost.title) newPost.title = 'Untitled';
    if (!newPost.author) newPost.author = 'Unknown';
    newPost.publishTime = date.valueOf();
    newPost.id = serverAddPost(newPost);
    if (!newPost.id) return;
    setPosts(posts.concat(newPost));
    navigate('/');
  }

  return (
    <div className="App">
      <Header
        searchRequest={searchRequest}
        handleSearch={handleSearch}
      />
      <Nav location={location} />
      <Routes>
        <Route path="" element={
          <Home posts={displayedPosts} />
        } />
        <Route path="post" element={
          <CreatePost handleCreatePost={handleCreatePost} />
        } />
        <Route path="post/:id" element={
          <PostPage posts={ posts } />
        } />
        <Route path="about" element={
          <About />
        } />
        <Route path="*" element={
          <Missing />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
