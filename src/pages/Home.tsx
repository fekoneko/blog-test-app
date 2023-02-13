import './styles/Home.css';
import Feed from '../components/Feed';
import { PostInterface } from '../scripts/interfaces';

const Home = (props: {
  posts: PostInterface[],
  handleEdit: (id: number) => any,
  handleDelete: (id: number) => any,
}) => {
  return (
    <main className="Home" role="main">
      <h1>Home</h1>
      <Feed
        posts={props.posts}
        handleEdit={props.handleEdit}
        handleDelete={props.handleDelete}
      />
    </main>
  );
}

export default Home;