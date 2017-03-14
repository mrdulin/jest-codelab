import { DB } from './db';

interface ILocationDAO {
  findById(id: number): Promise<ILocation | undefined>;
  findAllIds(): Promise<number[]>;
}

interface ILocation {
  id: number;
  name: string;
}

class LocationDAOImpl implements ILocationDAO {
  public async findById(id: number): Promise<ILocation | undefined> {
    return await DB.locations.find(location => location.id === id);
  }

  public async findAllIds(): Promise<number[]> {
    return await DB.locations.map(location => location.id);
  }
}

export { ILocation, ILocationDAO };
export default LocationDAOImpl;
