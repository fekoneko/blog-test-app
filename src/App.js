import './styles/App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { POSTS_API_NAME, apiGet, apiPost, apiDelete, apiPatch } from './scripts/api'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Missing from './pages/Missing';
import EditPost from './pages/EditPost';

function App() {
  const [posts, setPosts] = useState([]);

  const [displayedPosts, setDisplayedPosts] = useState(posts);

  const updatePosts = async () => {
    const result = await apiGet(POSTS_API_NAME);
    if (result === null) {
      console.log('Post Load Error!'); // TODO: Display error on page
      return false;
    } 
    setPosts(result);
    return true;
  }

  const uploadPost = async (post) => {
    delete post.id;
    const result = await apiPost(POSTS_API_NAME, post);
    if (result === null) {
      console.log('Post Upload Error!'); // TODO: Display error on page
      return false;
    }
    await updatePosts();
    return true;
  }

  const deletePost = async (id) => {
    const result = await apiDelete(POSTS_API_NAME, id);
    if (result === null) {
      console.log('Post Upload Error!'); // TODO: Display error on page
      return false;
    }
    await updatePosts();
    return true;
  }

  const editPost = async (post, id) => {
    const result = await apiPatch(POSTS_API_NAME, post, id);
    if (result === null) {
      console.log('Post Upload Error!'); // TODO: Display error on page
      return false;
    }
    await updatePosts();
    return true;
  }

  useEffect(() => {
    updatePosts();
  }, []);

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

  const handleCreatePost = async (post) => {
    const date = new Date();
    if (!post.content) return;
    if (!post.title) post.title = 'Untitled';
    if (!post.author) post.author = 'Unknown';
    post.publishTime = date.valueOf();
    if (await uploadPost(post)) navigate('/');
  }

  const handleEdit = async (post, id) => {
    if (await editPost(post, id)) navigate(`/post/${id}`);
  }

  const handleDelete = async (id) => {
    if (await deletePost(id)) navigate('/');
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
          <Home
            posts={displayedPosts}
            handleEdit={(id) => navigate(`edit/${id}`)}
            handleDelete={handleDelete}
          />
        } />
        <Route path="post" element={
          <CreatePost handleCreatePost={handleCreatePost} />
        } />
        <Route path="post/:id" element={
          <PostPage
            posts={ posts }
            handleEdit={(id) => navigate(`edit/${id}`)}
            handleDelete={handleDelete}
          />
        } />
        <Route path="edit/:id" element={
          <EditPost
            posts={ posts }
            handleEdit={handleEdit}
          />
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
