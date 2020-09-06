const userTable = {
  find() {
    return this;
  },
  sort() {
    return this;
  },
  exec(fn) {
    console.log('real exec');
    fn();
  },
};
