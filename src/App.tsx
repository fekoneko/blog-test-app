import './styles/App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { PostInterface } from './scripts/interfaces';
import { updatePosts, uploadPost, editPost, deletePost } from './scripts/postFunctions';
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
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<PostInterface[]>(posts);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    updatePosts(setPosts);
  }, []);

  useEffect(() => {
    if (!searchRequest) {
      setDisplayedPosts(posts);
      return;
    }
    const result = posts.filter((post: PostInterface) =>
      searchRequest
        .split(',')
        .map((requestPartFull) => {
          const requestPart = requestPartFull.trim();
          const requestPartLowercase = requestPart.toLowerCase();
          const postDate = new Date(post.publishTime);
          return (
            requestPart &&
            (post.id === +requestPart ||
              postDate.toDateString().toLowerCase() === requestPartLowercase ||
              post.title.toLowerCase().includes(requestPartLowercase) ||
              post.content.toLowerCase().includes(requestPartLowercase) ||
              post.author.toLowerCase().includes(requestPartLowercase))
          );
        })
        .some((meetRequestParts) => meetRequestParts)
    );
    setDisplayedPosts(result);
  }, [searchRequest, posts]);

  useEffect(() => {
    if (!location.search) {
      if (searchRequest.replace(/\s+$/, '') !== '') setSearchRequest('');
      return;
    }
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('s');
    if (searchParam != null && searchRequest.replace(/\s+$/, '') !== searchParam) {
      setSearchRequest(searchParam);
    }
  }, [location.search, searchRequest]);

  const handleSearch = useCallback(
    (request: string): void => {
      request = request.replace('&', '').replace('#', '').replace('%', '');
      setSearchRequest(request); // Needed because in query params spaces are trimmed
      if (request.replace(/\s+$/, '')) navigate(`/?s=${request}`);
      else navigate('/');
    },
    [navigate]
  );

  const handleCreatePost = useCallback(
    async (post: PostInterface): Promise<void> => {
      const date = new Date();
      if (!post.content) return;
      if (!post.title) post.title = 'Untitled';
      if (!post.author) post.author = 'Unknown';
      post.publishTime = date.valueOf();
      if (await uploadPost(setPosts, post)) navigate('/');
    },
    [navigate]
  );

  const handleEdit = useCallback(
    async (post: PostInterface, id: number): Promise<void> => {
      if (await editPost(setPosts, post, id)) navigate(`/post/${id}`);
    },
    [navigate]
  );

  const handleDelete = useCallback(
    async (id: number): Promise<void> => {
      if (await deletePost(setPosts, id)) navigate('/');
    },
    [navigate]
  );

  return (
    <div className="App">
      <Header searchRequest={searchRequest} handleSearch={handleSearch} />
      <Nav location={location} />
      <Routes>
        <Route
          path=""
          element={
            <Home
              posts={displayedPosts}
              handleEdit={(id: number) => navigate(`edit/${id}`)}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="post" element={<CreatePost handleCreatePost={handleCreatePost} />} />
        <Route
          path="post/:id"
          element={
            <PostPage
              posts={posts}
              handleEdit={(id: number) => navigate(`edit/${id}`)}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="edit/:id" element={<EditPost posts={posts} handleEdit={handleEdit} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
