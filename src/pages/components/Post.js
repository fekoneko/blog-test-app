import './styles/Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const publishDate = new Date(post.publishDate);

  return (
    <article className="Post" id={`post${post.id}`}>
      <Link
        to={`/post/${post.id} `}
        className="postTitle"
      >
        <h2>{post.title}</h2>
      </Link>
      <div className="postInfo">
        <Link to={`/search/author?s=${post.author}`}>
          {post.author}
        </Link>
        <Link to={`/search/date?s=${post.publishDate}`}>
          {publishDate.toDateString()}
        </Link>
      </div>
      <p className="postContent">{
        post.content <= 128
          ? post.content
          : `${post.content.slice(0, 128)}...`
      }</p>
    </article>
  );
}
Post.defaultProps = {
  post: {id: NaN, title:'', content:'', author:'', publishTime:''},
}
export default Post;