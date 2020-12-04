export const pause = ({ time } = {} as any) => {
  const pauseTime = time || 500;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, pauseTime);
  });
};
