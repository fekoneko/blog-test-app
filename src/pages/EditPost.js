import './styles/EditPost.css';
import { useParams } from 'react-router-dom';
import Missing from './Missing';
import CreatePostForm from '../components/CreatePostForm';

const EditPost = ({ posts, handleEdit }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) return (
    <Missing />
  );

  return (
    <main className="EditPost" role="main">
      <h1>Edit Post</h1>
      <CreatePostForm
        handleCreatePost={(post) => handleEdit(post, id)}
        initPost={post}
      />
    </main>
  );
}
export default EditPost;