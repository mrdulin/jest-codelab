import LocationDAOImpl from '../LocationDAOImpl';
import { LocationService } from '../LocationService';

jest.mock('../LocationDAOImpl.ts');

describe('LocationService', () => {
  const locationService = new LocationService();

  it('#findById - should find mock location by id', async () => {
    const location = await locationService.findById(1);
    console.log('location: ', location); // { id: 1544, name: 'Kreigerburgh' }
  });

  it('#findById - should get an error when id equals 0', async () => {
    LocationDAOImpl.prototype.findById = jest.fn().mockImplementationOnce((id: number) => {
      if (id <= 0) {
        return new Error('id should greater than 0');
      }
    });

    try {
      await locationService.findById(0);
    } catch (error) {
      expect(error.message).toBe('id should greater than 0');
    }
  });
});
