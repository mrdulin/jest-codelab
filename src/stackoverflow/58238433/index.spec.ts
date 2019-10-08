import faker from 'faker';

describe('test suites', () => {
  it('should contains', () => {
    const state = new Array(6).fill(null).map(() => ({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      age: faker.random.number({ min: 0, max: 100 }),
      dob: 'c',
      address_1: faker.address.city(),
      postal_code: faker.address.zipCode()
    }));

    const matchObj = new Array(state.length).fill(null).map((_, idx) => {
      const item = state[idx];
      const stateSlice = {
        first_name: item.first_name,
        last_name: item.last_name,
        age: item.age
      };
      return stateSlice;
    });
    expect(matchObj).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          first_name: expect.any(String),
          last_name: expect.any(String),
          age: expect.any(Number)
        })
      ])
    );
    expect(state).toMatchObject(matchObj);
    expect(state).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          first_name: expect.any(String),
          last_name: expect.any(String),
          age: expect.any(Number)
        })
      ])
    );
  });
});
