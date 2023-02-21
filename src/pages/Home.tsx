import Feed from '../components/Feed';
import { PostInterface } from '../scripts/interfaces';

type HomeProps = {
  posts: PostInterface[];
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Home = ({ posts, handleEdit, handleDelete }: HomeProps) => {
  return (
    <main className="Home" role="main">
      <h1>Home</h1>
      <Feed posts={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </main>
  );
};

export default Home;
