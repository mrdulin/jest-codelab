function chunk(array, size) {
  const chunked = new Array(); // change this to [] the test pass

  for (let i = 0, j = 0; i < array.length; i += size, j++) {
    chunked[j] = array.slice(i, i + size); // remove index j and use push() method test pass
  }

  return chunked;
}

module.exports = chunk;
