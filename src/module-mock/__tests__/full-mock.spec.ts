import LocationDAOImpl, { ILocationDAO, ILocation } from '../LocationDAOImpl';

// This file illustrates a full mock of a module.

jest.mock('../LocationDAOImpl.ts', () => {
  return jest.fn().mockImplementation(() => {
    return {
      findById: jest.fn((id: number) => {
        return { id, name: 'mock location' };
      }),
      findAllIds: jest.fn()
    };
  });
});

describe('mock instances method', () => {
  describe('LocationDAOImpl', () => {
    const locationDaoImpl: ILocationDAO = new LocationDAOImpl();
    afterEach(() => {
      // not working
      // (LocationDAOImpl as jest.Mock<LocationDAOImpl>).mockClear();
      // not working
      // jest.clearAllMocks();
      // not working
      // jest.resetModules();
      // not working
      // jest.unmock('../LocationDAOImpl.ts');
    });

    it('#findById', async () => {
      const location: ILocation | undefined = await locationDaoImpl.findById(666);
      const expectValue = { id: 666, name: 'mock location' };
      expect(location).toEqual(expectValue);
    });

    it('clear findById mock', async () => {
      const location: ILocation | undefined = await locationDaoImpl.findById(555);
      console.log('location: ', location); // The result always:  { id: 555, name: 'mock location' }
    });
  });
});
