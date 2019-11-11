export default {
  config: {},
  has(key) {
    return !!config[key];
  },
  get(key) {
    return config[key];
  }
};
