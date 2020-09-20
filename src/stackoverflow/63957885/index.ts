const injectArray = (arr, fn) => {
  return arr.map((el) => ({
    ...el,
    fn: () => fn(el),
  }));
};

export {injectArray}