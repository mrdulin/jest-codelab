const mod = (() => {
  let value;

  return {
    init: (storage) => {
      storage.get('key', (err, v) => {
        value = v;
      });
    },
    get: () => value,
  };
})();

export { mod };
