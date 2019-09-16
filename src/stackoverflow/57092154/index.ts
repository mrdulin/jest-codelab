function funcToTest(imgUrl, callback) {
  const img = new Image();
  img.src = imgUrl;

  img.onload = () => {
    callback(true); // should return callback with true on finish
  };

  img.onerror = e => {
    callback(false); // should return callback with false on error
    console.log(e);
  };

  return img;
}

export { funcToTest };
