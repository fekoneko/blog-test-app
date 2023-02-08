import './styles/CreatePostForm.css'
import { useState } from 'react';

const CreatePostForm = ({ handleCreatePost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
  });

  return (
    <form className="CreatePostForm" onSubmit={ (e) => {
      e.preventDefault();
      handleCreatePost(newPost);
    }}>
      <fieldset>
        <label htmlFor="postTitleInput">Title:</label>
        <input
          id="postTitleInput"
          type="text"
          autoFocus
          maxLength="256"
          placeholder="What is your post about?"
          onChange={ (e) => setNewPost({ ...newPost, title: e.target.value }) }
          value={newPost.title}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="postAuthorInput">Author:</label>
        <input
          id="postAuthorInput"
          type="text"
          maxLength="256"
          placeholder="Leave your name here."
          onChange={ (e) => setNewPost({ ...newPost, author: e.target.value }) }
          value={newPost.author}
        />
      </fieldset>
      <label
        htmlFor="postContentInput"
        style={{position: 'absolute', left: -99999}}
      >Post Body:</label>
      <textarea
        id="postContentInput"
        type="text"
        required
        maxLength="10000"
        placeholder="Start writing here..."
        onChange={ (e) => setNewPost({ ...newPost, content: e.target.value }) }
        value={newPost.content}
      />
      <button type="submit">Upload Post</button>
    </form>
  );
}
export default CreatePostForm;