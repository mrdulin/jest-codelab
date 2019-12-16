const loaders = {
  model: (arg1) => {
    // do something to return models data
    console.log('do something to return models data');
  },
  events: (arg2) => {
    // do something to return events data
  },
};

export default class TestClass {
  constructor(config) {
    this.loader = loaders[config.type];
  }
}
