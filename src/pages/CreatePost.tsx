import { PostInterface } from '../scripts/interfaces';
import EditPostForm from '../components/EditPostForm';

const CreatePost = (props: {
  handleCreatePost: (post: PostInterface) => any;
}) => {
  return (
    <main className="CreatePost" role="main">
      <h1>Create Post</h1>
      <EditPostForm handleCreatePost={props.handleCreatePost} />
    </main>
  );
};

export default CreatePost;
