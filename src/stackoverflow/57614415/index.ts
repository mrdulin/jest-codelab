import UploadHandler from './UploadHandler';

export function fetchAndUploadImageThunk({ id, imageSelected }) {
  return async () => {
    const fileName = imageSelected.get('title');
    const mimeType = imageSelected.get('type');
    await fetch(imageSelected.get('url'), { mode: 'cors', credentials: 'include' })
      .then(async response => {
        if (!response.ok) {
          throw new Error('fetch image error');
        }
        const responseBlob = await response.blob();
        const file = new File([responseBlob], fileName, { type: mimeType });
        const uploadHandler = new UploadHandler({ onFail: () => {} });
        await uploadHandler.uploadFile({
          file,
          fileNewName: fileName
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };
}
