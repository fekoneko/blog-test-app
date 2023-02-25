import './styles/EditPostForm.css';
import { PostInterface } from '../scripts/interfaces';
import { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

type EditPostFormProps = {
  handleSubmit: (post: PostInterface) => any;
  initPost: PostInterface;
};

const EditPostForm = ({ handleSubmit, initPost }: EditPostFormProps) => {
  const [newPost, setNewPost] = useState(initPost);
  const { langData } = useContext(GlobalContext);

  return (
    <form
      className="EditPostForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(newPost);
      }}
    >
      <fieldset>
        <label htmlFor="postTitleInput">{langData.EditPostForm_titleLabel}</label>
        <input
          id="postTitleInput"
          type="text"
          autoFocus
          maxLength={256}
          placeholder={langData.EditPostForm_titlePlaceholder}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          value={newPost.title}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="postAuthorInput">{langData.EditPostForm_authorLabel}</label>
        <input
          id="postAuthorInput"
          type="text"
          maxLength={256}
          placeholder={langData.EditPostForm_authorPlaceholder}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          value={newPost.author}
        />
      </fieldset>
      <label htmlFor="postContentInput" style={{ position: 'absolute', left: -99999 }}>
        {langData.EditPostForm_contentLabel}
      </label>
      <textarea
        id="postContentInput"
        required
        maxLength={10000}
        placeholder={langData.EditPostForm_contentPlaceholder}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        value={newPost.content}
      />
      <button type="submit">{langData.EditPostForm_submit}</button>
    </form>
  );
};

EditPostForm.defaultProps = {
  initPost: {
    id: undefined,
    title: '',
    content: '',
    author: '',
    publishTime: 0,
  },
};

export default EditPostForm;
