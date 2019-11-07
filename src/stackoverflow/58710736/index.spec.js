import { SomeClass } from './';

describe('SomeClass', () => {
  test('should add data item', () => {
    const someClassInstance = new SomeClass();
    const uuidv1Spy = jest.spyOn(someClassInstance.$uuid, 'v1').mockReturnValueOnce('fake uuid');
    someClassInstance.addDataItem('jest');
    expect(uuidv1Spy).toBeCalledTimes(1);
    expect(someClassInstance.editableData).toEqual({ jest: [{ id: 'fake uuid', units: '', price: '', label: '' }] });
  });
});
