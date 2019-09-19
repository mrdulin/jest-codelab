import fetch from 'node-fetch';

export default async function getUsers() {
  const resp = await fetch(`/users`);
  const data = await resp.json();
  return data.message;
}
