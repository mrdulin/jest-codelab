import { Component } from '.';

const mockClient = {
  items: jest.fn().mockReturnThis(),
  type: jest.fn().mockReturnThis(),
  toObservable: jest.fn().mockReturnThis(),
  subscribe: jest.fn().mockReturnThis()
};

const mockProps = {
  client: mockClient
};

const component = new Component(mockProps);

describe('Component', () => {
  describe('#componentDidMount', () => {
    it('should mount the component and set state correctly', () => {
      const mockedResponse = { items: [{}], somethingElse: {} };
      mockClient.subscribe.mockImplementationOnce(handler => handler(mockedResponse));
      // tslint:disable-next-line: no-string-literal
      component['setState'] = jest.fn();
      component.componentDidMount();
      expect(mockClient.items().type).toBeCalledWith('client');
      // tslint:disable-next-line: no-string-literal
      expect(component['setState']).toBeCalledWith(mockedResponse);
    });
  });
});
