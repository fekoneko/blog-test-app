import axios from 'axios';

let API_URL: string = '';
if ((import.meta as any).env.DEV) {
  // development
  API_URL = 'http://localhost:3500';
} else {
  // production (for GitHub Pages)
  API_URL = 'https://my-json-server.typicode.com/fekoneko/fekoneko-blog';
}

export const POSTS_API_NAME = 'posts';

export const axiosPublic = axios.create({
  baseURL: API_URL,
});
export const axiosAuthRequired = axios.create({
  baseURL: API_URL,
});
