import fetch from 'node-fetch';

function fetchBlobImage() {
  const url = '';
  return fetch(url)
    .then(response => response.blob)
    .then(blob => processImage(blob));
}

function processImage(blob) {
  return JSON.stringify(blob);
}

export { fetchBlobImage };
