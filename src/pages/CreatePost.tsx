import { PostInterface } from '../scripts/interfaces';
import EditPostForm from '../components/EditPostForm';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type CreatePostProps = {
  handleCreatePost: (post: PostInterface) => any;
};

const CreatePost = ({ handleCreatePost }: CreatePostProps) => {
  const { langData } = useContext(GlobalContext);

  return (
    <main className="CreatePost" role="main">
      <h1>{langData.CreatePost_header}</h1>
      <EditPostForm handleSubmit={handleCreatePost} />
    </main>
  );
};

export default CreatePost;
