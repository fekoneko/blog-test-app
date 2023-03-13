import { BASE_URL } from '../scripts/constants';
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
  const { settings, langData } = useContext(GlobalContext);

  const post = posts.find((p) => p.id?.toString() === id);
  if (!post) return <Missing />;

  const postPublishDate = new Date(post.publishTime);
  const postEditDate = post.editTime !== undefined ? new Date(post.editTime) : null;
  const locale: Parameters<typeof postPublishDate.toLocaleDateString>[0] =
    settings.language === Languages.rus
      ? 'ru-RU'
      : settings.language === Languages.jap
      ? 'ja-JP'
      : 'en-US';

  return (
    <main className="PostPage" role="main">
      <h1 className="postTitle">{post.title}</h1>
      <div className="postInfo">
        <Link to={`${BASE_URL}?s=${post.author}`}>
          {langData.namePrefix}
          {post.author}
          {langData.nameSuffix}
        </Link>
        <Link to={`${BASE_URL}?s=${postPublishDate.toLocaleDateString('en-US')}`}>
          {postPublishDate.toLocaleDateString(locale)}
          {postEditDate
            ? ` (${langData.Post_EditedCaption} ${postEditDate.toLocaleDateString(locale)})`
            : ''}
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
