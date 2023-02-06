import './styles/Home.css';
import Feed from '../components/Feed';

const Home = ({ posts }) => {
  return (
    <main className="Home" role="main">
      <h1>Home</h1>
      <Feed posts={posts} />
    </main>
  );
}

export default Home;