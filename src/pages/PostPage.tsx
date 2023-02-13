import './styles/PostPage.css';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Missing from './Missing';
import { PostInterface } from '../scripts/interfaces';

const PostPage = (props: {
  posts: PostInterface[];
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
}) => {
  const { id } = useParams();
  const post = props.posts.find((p) => p.id?.toString() === id);
  if (!post) return <Missing />;

  const postDate = new Date(post.publishTime);

  return (
    <main className="PostPage" role="main">
      <h2 className="postTitle">{post.title}</h2>
      <div className="postInfo">
        <Link to={`/?s=${post.author}`}>{post.author}</Link>
        <Link to={`/?s=${postDate.toDateString()}`}>
          {postDate.toDateString()}
        </Link>
        <div className="postControls">
          <button
            onClick={() => {
              if (post.id) props.handleEdit(post.id);
            }}
          >
            <BsPencilFill />
          </button>
          <button
            onClick={() => {
              if (post.id) props.handleDelete(post.id);
            }}
          >
            <BsTrashFill />
          </button>
        </div>
      </div>
      <p className="postContent">{post.content}</p>
    </main>
  );
};
PostPage.defaultProps = {
  post: {
    id: NaN,
    title: '',
    content: '',
    author: '',
    publishTime: ''
  }
};
export default PostPage;
