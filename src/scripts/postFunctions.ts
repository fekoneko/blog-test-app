import { PostInterface } from './interfaces';
import { POSTS_API_NAME, apiGet, apiPost, apiDelete, apiPatch } from './api';

export const findPostById = (posts: PostInterface[], id: number): PostInterface | undefined =>
  posts.find((post) => post.id === id);

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
  newPost: PostInterface
): Promise<boolean> => {
  const preparedPost: Partial<PostInterface> = newPost;
  delete preparedPost.id;
  delete preparedPost.publishTime;
  if ('editTime' in preparedPost) delete preparedPost.editTime;

  const result = await apiPost(POSTS_API_NAME, preparedPost);
  if (result === null) {
    console.log('Post Upload Error!'); // TODO: Display error on page
    return false;
  }
  await updatePosts(setPosts);
  return true;
};

export const deletePost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  deleteId: number
): Promise<boolean> => {
  const result = await apiDelete(POSTS_API_NAME, deleteId);
  if (result === null) {
    console.log('Post Upload Error!'); // TODO: Display error on page
    return false;
  }
  await updatePosts(setPosts);
  return true;
};

const editPost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  updatedFields: Partial<PostInterface>,
  editId: number
): Promise<boolean> => {
  const preparedFields: Partial<PostInterface> = updatedFields;
  delete preparedFields.id;
  if ('editTime' in preparedFields) delete preparedFields.editTime;

  const result = await apiPatch(POSTS_API_NAME, preparedFields, editId);
  if (result === null) {
    console.log('Post Upload Error!'); // TODO: Display error on page
    return false;
  }
  await updatePosts(setPosts);
  return true;
};

export const compareAndEditPost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  currentPost: PostInterface,
  editedPost: PostInterface,
  editiId: number
): Promise<boolean> => {
  const updatedFields: Partial<PostInterface> = {};
  for (const field in currentPost) {
    if (
      field in editedPost &&
      currentPost[field as keyof PostInterface] !== editedPost[field as keyof PostInterface]
    ) {
      updatedFields[field as keyof PostInterface] = editedPost[field as keyof PostInterface] as any;
    }
  }
  return editPost(setPosts, updatedFields, editiId);
};
