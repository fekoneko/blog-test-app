import './styles/main.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Languages, PostInterface, Themes } from './scripts/interfaces';
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
import { GlobalContext } from './contexts/GlobalContext';

function App() {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<PostInterface[]>(posts);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const { settings } = useContext(GlobalContext);
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

    const displaySearchResults = () => {
      const searchRequestSplitted = searchRequest
        .split(',')
        .map((requestPart) => requestPart.trim().toLowerCase());
      const result = posts.filter((post: PostInterface) =>
        searchRequestSplitted
          .map((requestPart) => {
            const requestDate = new Date(requestPart);
            return (
              requestPart &&
              (post.id === +requestPart ||
                (post.publishTime - requestDate.valueOf() < 86400000 &&
                  post.publishTime - requestDate.valueOf() >= 0) ||
                post.title.toLowerCase().includes(requestPart) ||
                post.content.toLowerCase().includes(requestPart) ||
                post.author.toLowerCase().includes(requestPart))
            );
          })
          .some((meetRequestParts) => meetRequestParts)
      );
      setDisplayedPosts(result);
    };
    displaySearchResults();
  }, [searchRequest, posts]);

  useEffect(() => {
    const getSearchFromQuery = () => {
      if (!location.search) {
        if (searchRequest.replace(/\s+$/, '') !== '') setSearchRequest('');
        return;
      }
      const params = new URLSearchParams(location.search);
      const searchParam = params.get('s');
      if (searchParam != null && searchRequest.replace(/\s+$/, '') !== searchParam) {
        setSearchRequest(searchParam);
      }
    };
    getSearchFromQuery();
  }, [location.search, searchRequest]);

  const handleSearch = useCallback(
    (request: string): void => {
      request = request.replace('&', '').replace('#', '').replace('%', '');
      setSearchRequest(request); // Needed because spaces are trimmed in query params
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
    <div
      className="App"
      lang={
        settings.language === Languages.rus
          ? 'ru'
          : settings.language === Languages.jap
          ? 'ja'
          : 'en'
      }
    >
      <link
        rel="stylesheet"
        type="text/css"
        href={
          settings.theme === Themes.light
            ? '/src/styles/lightTheme.css'
            : '/src/styles/darkTheme.css'
        }
      />
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
