import faker from 'faker';

const DB = {
  locations: [{ id: 1, name: faker.address.city() }, { id: 2, name: faker.address.city() }]
};

export { DB };
