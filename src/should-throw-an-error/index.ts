async function getUserById(id?: number) {
  return new Promise((resolve, reject) => {
    if (id) {
      const user = { id };
      resolve(user);
    } else {
      reject(new Error('user id is required'));
    }
  });
}

export { getUserById };
