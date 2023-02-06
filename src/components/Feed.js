import './styles/Feed.css';
import Post from './Post';

const Feed = ({ posts }) => {
  return (
    <section className="Feed">
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </section>
  );
}
Feed.defaultProps = {
  posts: [],
}
export default Feed;