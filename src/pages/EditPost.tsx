import './styles/EditPost.css';
import { useParams } from 'react-router-dom';
import Missing from './Missing';
import CreatePostForm from '../components/CreatePostForm';
import { PostInterface } from '../scripts/interfaces';

const EditPost = (props: {
  posts: PostInterface[],
  handleEdit: (post: PostInterface, id: number) => any,
}) => {
  const { id } = useParams();
  const post = props.posts.find((p) => p.id?.toString() === id);
  if (!post) return (
    <Missing />
  );

  return (
    <main className="EditPost" role="main">
      <h1>Edit Post</h1>
      <CreatePostForm
        handleCreatePost={ (post) => {
          if (id) props.handleEdit(post, +id);
        } }
        initPost={post}
      />
    </main>
  );
}
export default EditPost;