import './styles/CreatePost.css';
import CreatePostForm from '../components/CreatePostForm';

const CreatePost = ({ handleCreatePost }) => {
  return (
    <main className="CreatePost" role="main">
      <h1>Create Post</h1>
      <CreatePostForm handleCreatePost={handleCreatePost} />
    </main>
  );
}

export default CreatePost;