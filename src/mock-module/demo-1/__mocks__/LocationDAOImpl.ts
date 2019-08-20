import faker from 'faker';

import { ILocationDAO, ILocation } from '../LocationDAOImpl';

class LocationDAOImpl implements ILocationDAO {
  public async findById(id: number): Promise<ILocation | undefined> {
    return { id: faker.random.number(), name: faker.address.city() };
  }

  public async findAllIds(): Promise<number[]> {
    return [faker.random.number(), faker.random.number()];
  }
}

export { ILocation, ILocationDAO };
export default LocationDAOImpl;
