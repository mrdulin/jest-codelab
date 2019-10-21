export default function download(blobUrl, fileName) {
  const link = document.createElement('a');
  link.setAttribute('href', blobUrl);
  link.setAttribute('download', `${fileName}.pdf`);
  link.style.display = 'none';

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}
