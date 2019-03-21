import LocationDAOImpl, { ILocationDAO, ILocation } from '../LocationDAOImpl';
import { DB } from '../db';

describe('mock specific method', () => {
  it('#findById', async () => {
    LocationDAOImpl.prototype.findById = jest.fn().mockImplementationOnce(() => {
      return { id: 999, name: 'mock location' };
    });
    const locationDaoImpl: ILocationDAO = new LocationDAOImpl();
    const actualValue: ILocation | undefined = await locationDaoImpl.findById(0);
    const expectValue = { id: 999, name: 'mock location' };
    expect(actualValue).toEqual(expectValue);
    expect(jest.isMockFunction(locationDaoImpl.findById)).toBeTruthy();
  });

  it('#findAllIds', async () => {
    const locationDaoImpl: ILocationDAO = new LocationDAOImpl();
    const actualValue: number[] = await locationDaoImpl.findAllIds();
    expect(actualValue).toEqual(DB.locations.map(location => location.id));
    expect(jest.isMockFunction(locationDaoImpl.findAllIds)).toBeFalsy();
  });
});
