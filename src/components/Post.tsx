import './styles/Post.css';
import { BsTrashFill, BsPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PostInterface } from '../scripts/interfaces';

const Post = (props: {
  post: PostInterface,
  handleEdit: (id: number) => any,
  handleDelete: (id: number) => any,
}) => {
  const postDate = new Date(props.post.publishTime);

  return (
    <article className="Post" id={`post${props.post.id}`}>
      <Link
        to={`/post/${props.post.id} `}
        className="postTitle"
      >
        <h2>{props.post.title}</h2>
      </Link>
      <div className="postInfo">
        <Link to={`/?s=${props.post.author}`}>
          {props.post.author}
        </Link>
        <Link to={`/?s=${postDate.toDateString()}`}>
          {postDate.toDateString()}
        </Link>
      </div>
      <p className="postContent">{
        props.post.content.length <= 128
          ? props.post.content
          : `${props.post.content.slice(0, 128)}...`
      }</p>
      <div className="postControls">
        <button onClick={ () => {
          if (props.post.id) props.handleEdit(props.post.id)
        } }><BsPencilFill /></button>
        <button onClick={ () => {
          if (props.post.id) props.handleDelete(props.post.id)
        } }><BsTrashFill /></button>
      </div>
    </article>
  );
}
Post.defaultProps = {
  post: {id: NaN, title:'', content:'', author:'', publishTime:''},
}
export default Post;