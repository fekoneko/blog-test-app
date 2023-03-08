let API_URL: string = '';
if ((import.meta as any).env.DEV) {
  // development
  API_URL = 'http://localhost:3500';
} else {
  // production (for GitHub Pages)
  API_URL = 'https://my-json-server.typicode.com/fekoneko/fekoneko-blog';
}

export const POSTS_API_NAME = 'posts';

export const apiGet = async (apiName: string): Promise<any | null> => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${API_URL}/${apiName}`, request);
  if (response.ok) {
    try {
      return await response.json();
    } catch (err) {
      return '';
    }
  } else return null;
};

export const apiPost = async (apiName: string, item: object): Promise<any | null> => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${API_URL}/${apiName}`, request);
  if (response.ok) {
    try {
      return await response.json();
    } catch (err) {
      return '';
    }
  } else return null;
};

export const apiDelete = async (apiName: string, id: number): Promise<any | null> => {
  const request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${API_URL}/${apiName}/${id}`, request);
  if (response.ok) {
    try {
      return await response.json();
    } catch (err) {
      return '';
    }
  } else return null;
};

export const apiPatch = async (apiName: string, item: object, id: number): Promise<any | null> => {
  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${API_URL}/${apiName}/${id}`, request);
  if (response.ok) {
    try {
      return await response.json();
    } catch (err) {
      return '';
    }
  } else return null;
};
