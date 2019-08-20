const $ = {
  ajax(xhr) {
    return this;
  },
  success(fn) {
    if (fn) {
      fn();
    }
    return this;
  },
  error(fn) {
    if (fn) {
      fn();
    }
    return this;
  }
};
export default $;
