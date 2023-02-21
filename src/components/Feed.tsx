import { PostInterface } from '../scripts/interfaces';
import Post from './Post';

type FeedProps = {
  posts: PostInterface[];
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Feed = ({ posts, handleEdit, handleDelete }: FeedProps) => {
  return (
    <section className="Feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </section>
  );
};
Feed.defaultProps = {
  posts: [],
};
export default Feed;
