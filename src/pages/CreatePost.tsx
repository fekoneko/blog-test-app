import { PostInterface } from '../scripts/interfaces';
import EditPostForm from '../components/EditPostForm';

type CreatePostProps = {
  handleCreatePost: (post: PostInterface) => any;
};

const CreatePost = ({ handleCreatePost }: CreatePostProps) => {
  return (
    <main className="CreatePost" role="main">
      <h1>Create Post</h1>
      <EditPostForm handleCreatePost={handleCreatePost} />
    </main>
  );
};

export default CreatePost;
