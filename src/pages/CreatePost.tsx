import './styles/CreatePost.css';
import { PostInterface } from '../scripts/interfaces';
import CreatePostForm from '../components/CreatePostForm';

const CreatePost = (props: {
  handleCreatePost: (post: PostInterface) => any,
}) => {
  return (
    <main className="CreatePost" role="main">
      <h1>Create Post</h1>
      <CreatePostForm handleCreatePost={props.handleCreatePost} />
    </main>
  );
}

export default CreatePost;