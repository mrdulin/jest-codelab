import { Student } from './';

describe('Student', () => {
  describe('#goToSchool', () => {
    it('should take bus', () => {
      const john = new Student('John', 15);
      const driveSpyOn = jest.spyOn(john, 'drive');
      const takeBusSpyOn = jest.spyOn(john, 'takeBus');
      john.goToSchool();
      expect(takeBusSpyOn).toBeCalledTimes(1);
      expect(driveSpyOn).not.toBeCalled();
    });

    it('should drive', () => {
      const john = new Student('Lee', 17);
      const driveSpyOn = jest.spyOn(john, 'drive');
      const takeBusSpyOn = jest.spyOn(john, 'takeBus');
      john.goToSchool();
      expect(driveSpyOn).toBeCalledTimes(1);
      expect(takeBusSpyOn).not.toBeCalled();
    });
  });
});
