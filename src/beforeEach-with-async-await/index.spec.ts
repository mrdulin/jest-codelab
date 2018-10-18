import faker from 'faker';

jest.setTimeout(10000);

interface IUser {
  id: string;
  name: string;
}

interface IDb {
  users: IUser[];
}

const db: IDb = {
  users: []
};

async function createUser(): Promise<IUser> {
  return new Promise<IUser>((resolve: (value?: IUser | PromiseLike<IUser>) => void) => {
    setTimeout(() => {
      const user: IUser = { id: faker.random.uuid(), name: faker.name.findName() };
      db.users.push(user);
      resolve(user);
    }, 5000);
  });
}

async function deleteUser(id: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = db.users.findIndex((u: IUser) => u.id === id);
      let user: IUser;
      if (index !== -1) {
        db.users.splice(index, 1);
        user = db.users[index];
        return resolve(user);
      }
      reject(new Error('User not found'));
    }, 1000);
  });
}

describe('beforeEach with async/await test suites', () => {
  let user: IUser;
  beforeEach(async () => {
    console.log('before createUser');
    user = await createUser();
    console.log('after createUser');
  });
  afterEach(async () => {
    console.log('before deleteUser', user);
    await deleteUser(user.id);
    console.log('after deleteUser');
  });
  it('t-1', () => {
    expect(1).toBe(1);
  });
});
