import './styles/Feed.css';
import { PostInterface } from '../scripts/interfaces';
import Post from './Post';

const Feed = (props: {
  posts: PostInterface[],
  handleEdit: (id: number) => any,
  handleDelete: (id: number) => any,
}) => {
  return (
    <section className="Feed">
      {
        props.posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
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