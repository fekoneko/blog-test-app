import './styles/main.css';
import { BASE_URL } from './scripts/constants';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Languages, PostInterface, Themes } from './scripts/interfaces';
import {
  updatePosts,
  uploadPost,
  compareAndEditPost,
  deletePost,
  findPostById,
} from './scripts/postFunctions';
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
import { Helmet } from 'react-helmet-async';

function App() {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<PostInterface[]>(posts);
  const [searchRequest, setSearchRequest] = useState<string>('');
  const { settings } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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
      const querySarch = searchParams.get('s');
      if (!querySarch) {
        if (searchRequest.replace(/\s+$/, '') !== '') setSearchRequest('');
        return;
      }
      if (querySarch !== null && searchRequest.replace(/\s+$/, '') !== querySarch) {
        setSearchRequest(querySarch);
      }
    };
    getSearchFromQuery();
  }, [searchParams, searchRequest]);

  const handleSearch = (request: string): void => {
    request = request.replace('&', '').replace('#', '').replace('%', '');
    setSearchRequest(request); // Needed because spaces are trimmed in query params
    if (request.replace(/\s+$/, '')) navigate(`?s=${request}`);
    else navigate('');
  };

  const handleCreatePost = async (post: PostInterface): Promise<void> => {
    const date = new Date();
    if (!post.content) return;
    if (!post.title) post.title = 'Untitled';
    if (!post.author) post.author = 'Unknown';
    post.publishTime = date.valueOf();
    if (await uploadPost(setPosts, post)) navigate('');
  };

  const handleEdit = async (post: PostInterface, id: number): Promise<void> => {
    const currentPost: PostInterface | undefined = findPostById(posts, id);
    if (currentPost === undefined) return;
    if (await compareAndEditPost(setPosts, currentPost, post, id)) navigate(`post/${id}`);
  };

  const handleDelete = async (id: number): Promise<void> => {
    if (await deletePost(setPosts, id)) navigate('');
  };

  return (
    <div className="App">
      <Header searchRequest={searchRequest} handleSearch={handleSearch} navigate={navigate} />
      <Nav />
      <Routes>
        <Route
          index
          element={
            <Home
              posts={displayedPosts}
              search={!!searchRequest}
              handleEdit={(id: number) => navigate(`edit/${id}`)}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path={'post'}>
          <Route index element={<CreatePost handleCreatePost={handleCreatePost} />} />
          <Route
            path={':id'}
            element={
              <PostPage
                posts={posts}
                handleEdit={(id: number) => navigate(`edit/${id}`)}
                handleDelete={handleDelete}
              />
            }
          />
        </Route>
        <Route path={'edit/:id'} element={<EditPost posts={posts} handleEdit={handleEdit} />} />
        <Route path={'about'} element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />

      <Helmet>
        {settings.theme === Themes.light ? (
          <link rel="stylesheet" type="text/css" href={`${BASE_URL}themes/lightTheme.css`} />
        ) : (
          <link rel="stylesheet" type="text/css" href={`${BASE_URL}themes/darkTheme.css`} />
        )}
        {settings.language === Languages.rus ? (
          <html lang="ru" />
        ) : settings.language === Languages.jap ? (
          <html lang="ja" />
        ) : (
          <html lang="en" />
        )}
      </Helmet>
    </div>
  );
}

export default App;
