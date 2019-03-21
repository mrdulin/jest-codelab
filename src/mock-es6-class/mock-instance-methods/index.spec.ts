import LocationDAOImpl, { ILocationDAO, ILocation } from '../LocationDAOImpl';

jest.mock('./index', () => {
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
    beforeEach(() => {
      // not working
      // (LocationDAOImpl as jest.Mock<LocationDAOImpl>).mockClear();

      // not working
      jest.clearAllMocks();
    });

    it('#findById', async () => {
      const location: ILocation | undefined = await locationDaoImpl.findById(666);
      const expectValue = { id: 666, name: 'mock location' };
      expect(location).toEqual(expectValue);
    });

    it('clear findById mock', async () => {
      const location: ILocation | undefined = await locationDaoImpl.findById(555);
      console.log('location: ', location);
    });
  });
});
