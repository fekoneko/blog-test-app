import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Languages, PostInterface } from '../scripts/interfaces';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type PostProps = {
  post: PostInterface;
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Post = ({ post, handleEdit, handleDelete }: PostProps) => {
  const postDate = new Date(post.publishTime);
  const { settings, langData } = useContext(GlobalContext);
  const locale: Parameters<typeof postDate.toLocaleDateString>[0] =
    settings.language === Languages.rus
      ? 'ru-RU'
      : settings.language === Languages.jap
      ? 'ja-JP'
      : 'en-US';

  return (
    <article className="Post" id={`post${post.id}`}>
      <div className="postHead">
        <Link to={`${(import.meta as any).env.BASE_URL}post/${post.id} `} className="postTitle">
          <h2>{post.title}</h2>
        </Link>
        <div className="postControls">
          <button
            title={langData.Post_editTooltip}
            onClick={() => {
              if (post.id) handleEdit(post.id);
            }}
          >
            <BsPencilFill />
          </button>
          <button
            title={langData.Post_deleteTooltip}
            onClick={() => {
              if (post.id) handleDelete(post.id);
            }}
          >
            <BsTrashFill />
          </button>
        </div>
      </div>
      <div className="postInfo">
        <Link to={`${(import.meta as any).env.BASE_URL}?s=${post.author}`}>
          {langData.namePrefix}
          {post.author}
          {langData.nameSuffix}
        </Link>
        <Link to={`${(import.meta as any).env.BASE_URL}?s=${postDate.toLocaleDateString('en-US')}`}>
          {postDate.toLocaleDateString(locale)}
        </Link>
      </div>
      <p className="postContent">
        {post.content.length <= 256 ? post.content : `${post.content.slice(0, 256)}...`}
      </p>
    </article>
  );
};
Post.defaultProps = {
  post: {
    id: undefined,
    title: '',
    content: '',
    author: '',
    publishTime: 0,
  },
};
export default Post;
