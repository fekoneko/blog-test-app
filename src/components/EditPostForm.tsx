import './styles/EditPostForm.css';
import { PostInterface } from '../scripts/interfaces';
import { useState } from 'react';

const EditPostForm = (props: {
  handleCreatePost: (post: PostInterface) => any;
  initPost: PostInterface;
}) => {
  const [newPost, setNewPost] = useState(props.initPost);

  return (
    <form
      className="EditPostForm"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleCreatePost(newPost);
      }}
    >
      <fieldset>
        <label htmlFor="postTitleInput">Title:</label>
        <input
          id="postTitleInput"
          type="text"
          autoFocus
          maxLength={256}
          placeholder="What is your post about?"
          onChange={(e) =>
            setNewPost({ ...newPost, title: e.target.value })
          }
          value={newPost.title}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="postAuthorInput">Author:</label>
        <input
          id="postAuthorInput"
          type="text"
          maxLength={256}
          placeholder="Leave your name here."
          onChange={(e) =>
            setNewPost({ ...newPost, author: e.target.value })
          }
          value={newPost.author}
        />
      </fieldset>
      <label
        htmlFor="postContentInput"
        style={{ position: 'absolute', left: -99999 }}
      >
        Post Body:
      </label>
      <textarea
        id="postContentInput"
        required
        maxLength={10000}
        placeholder="Start writing here..."
        onChange={(e) =>
          setNewPost({ ...newPost, content: e.target.value })
        }
        value={newPost.content}
      />
      <button type="submit">Upload Post</button>
    </form>
  );
};

EditPostForm.defaultProps = {
  initPost: {
    id: undefined,
    title: '',
    content: '',
    author: '',
    publishTime: 0
  }
};

export default EditPostForm;
