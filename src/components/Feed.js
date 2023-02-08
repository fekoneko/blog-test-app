import './styles/Feed.css';
import Post from './Post';

const Feed = ({ posts, handleEdit, handleDelete }) => {
  return (
    <section className="Feed">
      {
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      }
    </section>
  );
}
Feed.defaultProps = {
  posts: [],
}
export default Feed;