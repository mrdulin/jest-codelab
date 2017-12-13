import { MyComponent } from './';

describe('MyComponent', () => {
  let fixture;
  let myServiceMock;

  beforeEach(() => {
    myServiceMock = {
      returnMyObservable: {
        subscribe: jest.fn()
      }
    };
    fixture = new MyComponent(myServiceMock);
  });

  it('should call do a thing when value is returned', () => {
    let observer;
    myServiceMock.returnMyObservable.subscribe.mockImplementation(handler => {
      observer = handler;
    });
    jest.spyOn(fixture, 'doAThing');
    fixture.testFunction();
    observer();

    expect(fixture.doAThing).toHaveBeenCalled();
  });
});
