const readFileAsync = (file, use = false) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    if (use) reader.readAsDataURL(file);
    else reader.readAsArrayBuffer(file);
    (readFileAsync as any)._reader = reader;
  });

export default readFileAsync;
