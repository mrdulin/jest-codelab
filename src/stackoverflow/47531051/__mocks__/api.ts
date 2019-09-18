const users = ['Jhon', 'Paul', 'Ringo'];

export default function getUsers() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(users);
    });
  });
}
