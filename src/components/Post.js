import './styles/Post.css';
import { BsTrashFill, BsPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Post = ({ post, handleEdit, handleDelete }) => {
  const postDate = new Date(post.publishTime);

  return (
    <article className="Post" id={`post${post.id}`}>
      <Link
        to={`/post/${post.id} `}
        className="postTitle"
      >
        <h2>{post.title}</h2>
      </Link>
      <div className="postInfo">
        <Link to={`/?s=${post.author}`}>
          {post.author}
        </Link>
        <Link to={`/?s=${postDate.toDateString()}`}>
          {postDate.toDateString()}
        </Link>
      </div>
      <p className="postContent">{
        post.content.length <= 128
          ? post.content
          : `${post.content.slice(0, 128)}...`
      }</p>
      <div className="postControls">
        <button onClick={() => handleEdit(post.id)}><BsPencilFill /></button>
        <button onClick={() => handleDelete(post.id)}><BsTrashFill /></button>
      </div>
    </article>
  );
}
Post.defaultProps = {
  post: {id: NaN, title:'', content:'', author:'', publishTime:''},
}
export default Post;