const API_URL = 'http://localhost:3500';
export const POSTS_API_NAME = 'posts';

export const apiGet = async (apiName) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${API_URL}/${apiName}`, request);
  if (response.ok) return await response.json();
  else return null;
}

export const apiPost = async (apiName, item) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${API_URL}/${apiName}`, request);
  if (response.ok) return await response.json();
  else return null;
}

export const apiDelete = async (apiName, id) => {
  const request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${API_URL}/${apiName}/${id}`, request);
  if (response.ok) return await response.json();
  else return null;
}

export const apiPatch = async (apiName, item, id) => {
  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${API_URL}/${apiName}/${id}`, request);
  if (response.ok) return await response.json();
  else return null;
}