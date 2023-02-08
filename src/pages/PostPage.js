import './styles/PostPage.css';
import { Link, useParams } from 'react-router-dom';
import Missing from './Missing';

const PostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) return (
    <Missing />
  );

  const postDate = new Date(post.publishTime);

  return (
    <main className="PostPage" role="main">
      <h2 className="postTitle">{post.title}</h2>
      <div className="postInfo">
        <Link to={`/?s=${post.author}`}>
          {post.author}
        </Link>
        <Link to={`/?s=${postDate.toDateString()}`}>
          {postDate.toDateString()}
        </Link>
      </div>
      <p className="postContent">{post.content}</p>
    </main>
  );
}
PostPage.defaultProps = {
  post: {id: NaN, title:'', content:'', author:'', publishTime:''},
}
export default PostPage;