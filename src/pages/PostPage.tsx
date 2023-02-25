import './styles/PostPage.css';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Missing from './Missing';
import { Languages, PostInterface } from '../scripts/interfaces';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type PostPageProps = {
  posts: PostInterface[];
  handleEdit: (id: number) => any;
  handleDelete: (id: number) => any;
};

const PostPage = ({ posts, handleEdit, handleDelete }: PostPageProps) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id?.toString() === id);
  if (!post) return <Missing />;

  const postDate = new Date(post.publishTime);
  const { settings, langData } = useContext(GlobalContext);
  const locale: Parameters<typeof postDate.toLocaleDateString>[0] =
    settings.language === Languages.rus
      ? 'ru-RU'
      : settings.language === Languages.jap
      ? 'ja-JP'
      : 'en-US';

  return (
    <main className="PostPage" role="main">
      <h2 className="postTitle">{post.title}</h2>
      <div className="postInfo">
        <Link to={`/?s=${post.author}`}>
          {langData.namePrefix}
          {post.author}
          {langData.nameSuffix}
        </Link>
        <Link to={`/?s=${postDate.toLocaleDateString('en-US')}`}>
          {postDate.toLocaleDateString(locale)}
        </Link>
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
      </div>
      <p className="postContent">{post.content}</p>
    </main>
  );
};
PostPage.defaultProps = {
  post: {
    id: undefined,
    title: '',
    content: '',
    author: '',
    publishTime: 0,
  },
};
export default PostPage;
