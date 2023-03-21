import Feed from '../components/Feed';
import { PostInterface } from '../scripts/interfaces';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { Helmet } from 'react-helmet-async';

type HomeProps = {
  posts: PostInterface[];
  search?: boolean;
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Home = ({ posts, search, handleEdit, handleDelete }: HomeProps) => {
  const { langData } = useContext(GlobalContext);

  return (
    <main className="Home" role="main">
      <Helmet>
        <title>{`${search ? langData.Search_title : langData.Home_title} - ${
          langData.SiteName
        }`}</title>
      </Helmet>

      <h1>{langData.Home_header}</h1>
      <Feed posts={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </main>
  );
};

export default Home;
