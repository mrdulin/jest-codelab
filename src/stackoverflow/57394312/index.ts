export const downloadWithLink = (imgDataUrl, fileName) => {
  const link = document.createElement('a');
  link.href = imgDataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
