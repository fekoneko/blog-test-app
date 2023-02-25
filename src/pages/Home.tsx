import Feed from '../components/Feed';
import { PostInterface } from '../scripts/interfaces';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type HomeProps = {
  posts: PostInterface[];
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Home = ({ posts, handleEdit, handleDelete }: HomeProps) => {
  const { langData } = useContext(GlobalContext);

  return (
    <main className="Home" role="main">
      <h1>{langData.Home_header}</h1>
      <Feed posts={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </main>
  );
};

export default Home;
