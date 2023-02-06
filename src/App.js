import './styles/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
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
      publishDate: 0,
    },
    {
      id: 2,
      title: 'Test Post 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore cum maxime explicabo soluta porro dignissimos illo commodi unde consectetur laboriosam possimus veritatis, necessitatibus dolores doloribus reiciendis incidunt suscipit quisquam.',
      author: 'fekoneko',
      publishDate: 0,
    },
    {
      id: 3,
      title: 'Test Post 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore cum maxime explicabo soluta porro dignissimos illo commodi unde consectetur laboriosam possimus veritatis, necessitatibus dolores doloribus reiciendis incidunt suscipit quisquam.',
      author: 'fekoneko',
      publishDate: 0,
    },
  ]);

  const [searchRequest, setSearchRequest] = useState('');

  const handleSearch = (request) => {
    setSearchRequest(request);
  }

  const location = useLocation();

  return (
    <div className="App">
      <Header
        searchRequest={searchRequest}
        handleSearch={handleSearch}
      />
      <Nav location={location} />
      <Routes>
        <Route path="" element={
          <Home posts={posts} />
        } />
        <Route path="post" element={
          <CreatePost />
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
