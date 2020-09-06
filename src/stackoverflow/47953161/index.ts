export async function main(User) {
  const trx = 'the trx';
  const userData = {};
  let user = await User.query(trx).insert(userData);
  return user.toJSON();
}
