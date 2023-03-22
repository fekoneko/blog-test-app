import { PostInterface } from './interfaces';
import { POSTS_API_NAME, axiosPublic, axiosAuthRequired } from './api';

export const findPostById = (posts: PostInterface[], id: number): PostInterface | undefined =>
  posts.find((post) => post.id === id);

const validatePost = (post: object): PostInterface | null => {
  const postTemplate: PostInterface = {
    id: 1,
    title: '',
    content: '',
    author: '',
    publishTime: 0,
    editTime: 0,
  };
  const optionalFields: string[] = ['editTime'];

  const validPost: PostInterface = {} as PostInterface;
  for (const field in postTemplate) {
    if (field in post) {
      if (
        typeof post[field as keyof object] === typeof postTemplate[field as keyof PostInterface]
      ) {
        validPost[field as keyof PostInterface] = post[field as keyof object];
      } else {
        return null;
      }
    } else if (!optionalFields.includes(field)) {
      return null;
    }
  }
  return validPost;
};

const validatePosts = (posts: object[]): PostInterface[] => {
  const validPosts: PostInterface[] = [];
  posts.forEach((post) => {
    const newValidPost = validatePost(post);
    if (newValidPost) validPosts.push(newValidPost);
  });
  return validPosts;
};

export const updatePosts = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>
): Promise<boolean> => {
  try {
    const response = await axiosPublic.get(POSTS_API_NAME);
    setPosts(validatePosts(response.data));
    return true;
  } catch (err) {
    console.log(`Post Load Error: ${(err as Error).message}`); // TODO: Display error on page
    return false;
  }
};

export const uploadPost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  newPost: PostInterface
): Promise<boolean> => {
  try {
    const preparedPost: Partial<PostInterface> = newPost;
    delete preparedPost.id;
    delete preparedPost.publishTime;
    if ('editTime' in preparedPost) delete preparedPost.editTime;

    await axiosAuthRequired.post(POSTS_API_NAME, preparedPost);
    await updatePosts(setPosts);
    return true;
  } catch (err) {
    console.log(`Post Upload Error: ${(err as Error).message}`); // TODO: Display error on page
    return false;
  }
};

export const deletePost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  deleteId: number
): Promise<boolean> => {
  try {
    await axiosAuthRequired.delete(`${POSTS_API_NAME}/${deleteId}`);
    await updatePosts(setPosts);
    return true;
  } catch (err) {
    console.log(`Post Delete Error: ${(err as Error).message}`); // TODO: Display error on page
    return false;
  }
};

const editPost = async (
  setPosts: React.Dispatch<React.SetStateAction<PostInterface[]>>,
  updatedFields: Partial<PostInterface>,
  editId: number
): Promise<boolean> => {
  try {
    const preparedFields: Partial<PostInterface> = updatedFields;
    delete preparedFields.id;
    if ('editTime' in preparedFields) delete preparedFields.editTime;

    await axiosAuthRequired.patch(`${POSTS_API_NAME}/${editId}`, preparedFields);
    await updatePosts(setPosts);
    return true;
  } catch (err) {
    console.log('Post Edit Error!'); // TODO: Display error on page
    return false;
  }
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
