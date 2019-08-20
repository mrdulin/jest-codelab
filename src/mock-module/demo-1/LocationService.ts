import LocationDAOImpl, { ILocationDAO } from './LocationDAOImpl';

class LocationService {
  private locationDAOImpl: ILocationDAO;
  constructor() {
    this.locationDAOImpl = new LocationDAOImpl();
  }

  public async findById(id: number) {
    return this.locationDAOImpl.findById(id);
  }
}

export { LocationService };
