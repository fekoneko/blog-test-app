import './styles/Post.css';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { PostInterface } from '../scripts/interfaces';

type PostProps = {
  post: PostInterface;
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Post = ({ post, handleEdit, handleDelete }: PostProps) => {
  const postDate = new Date(post.publishTime);

  return (
    <article className="Post" id={`post${post.id}`}>
      <Link to={`/post/${post.id} `} className="postTitle">
        <h2>{post.title}</h2>
      </Link>
      <div className="postInfo">
        <Link to={`/?s=${post.author}`}>{post.author}</Link>
        <Link to={`/?s=${postDate.toDateString()}`}>{postDate.toDateString()}</Link>
      </div>
      <p className="postContent">
        {post.content.length <= 128 ? post.content : `${post.content.slice(0, 128)}...`}
      </p>
      <div className="postControls">
        <button
          onClick={() => {
            if (post.id) handleEdit(post.id);
          }}
        >
          <BsPencilFill />
        </button>
        <button
          onClick={() => {
            if (post.id) handleDelete(post.id);
          }}
        >
          <BsTrashFill />
        </button>
      </div>
    </article>
  );
};
Post.defaultProps = {
  post: {
    id: undefined,
    title: '',
    content: '',
    author: '',
    publishTime: '',
  },
};
export default Post;
