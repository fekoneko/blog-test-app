const API_URL = 'http://localhost:3500';
export const POSTS_API_NAME = 'posts';

export const apiGet = async (apiName: string) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${API_URL}/${apiName}`, request);
  if (response.ok) return await response.json();
  else return null;
};

export const apiPost = async (apiName: string, item: object) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  };
  const response = await fetch(`${API_URL}/${apiName}`, request);
  if (response.ok) return await response.json();
  else return null;
};

export const apiDelete = async (apiName: string, id: number) => {
  const request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(
    `${API_URL}/${apiName}/${id}`,
    request
  );
  if (response.ok) return await response.json();
  else return null;
};

export const apiPatch = async (
  apiName: string,
  item: object,
  id: number
) => {
  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  };
  const response = await fetch(
    `${API_URL}/${apiName}/${id}`,
    request
  );
  if (response.ok) return await response.json();
  else return null;
};
