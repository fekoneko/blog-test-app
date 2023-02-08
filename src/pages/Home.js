import './styles/Home.css';
import Feed from '../components/Feed';

const Home = ({ posts, handleEdit, handleDelete }) => {
  return (
    <main className="Home" role="main">
      <h1>Home</h1>
      <Feed
        posts={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default Home;