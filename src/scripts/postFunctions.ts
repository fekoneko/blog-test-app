import { PostInterface } from './interfaces';
import { POSTS_API_NAME, apiGet, apiPost, apiDelete, apiPatch } from './api';

export const updatePosts = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>
): Promise<boolean> => {
  const result = await apiGet(POSTS_API_NAME);
  if (result === null) {
    console.log('Post Load Error!'); // TODO: Display error on page
    return false;
  }
  setPosts(result);
  return true;
};

export const uploadPost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  post: PostInterface
): Promise<boolean> => {
  const uploadedPost: Partial<PostInterface> = post;
  delete uploadedPost.id; // ID will be set on server
  console.log(uploadedPost);
  const result = await apiPost(POSTS_API_NAME, uploadedPost);
  if (result === null) {
    console.log('Post Upload Error!'); // TODO: Display error on page
    return false;
  }
  await updatePosts(setPosts);
  return true;
};

export const deletePost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  id: number
): Promise<boolean> => {
  const result = await apiDelete(POSTS_API_NAME, id);
  if (result === null) {
    console.log('Post Upload Error!'); // TODO: Display error on page
    return false;
  }
  await updatePosts(setPosts);
  return true;
};

export const editPost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  post: PostInterface,
  id: number
): Promise<boolean> => {
  const result = await apiPatch(POSTS_API_NAME, post, id);
  if (result === null) {
    console.log('Post Upload Error!'); // TODO: Display error on page
    return false;
  }
  await updatePosts(setPosts);
  return true;
};
