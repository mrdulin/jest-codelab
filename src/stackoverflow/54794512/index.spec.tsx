import MyComponent from './';
import axios from 'axios';

jest.mock('axios');

axios.get = jest.fn();

describe('MyComponent', () => {
  describe('test with jestjs', () => {
    it('componentDidMount - 1', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: 'mocked data' });
      await MyComponent.prototype.componentDidMount();
      expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/users');
    });

    it('componentDidMount - 2', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error('some error'));
      const actualValue = await MyComponent.prototype.componentDidMount();
      expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/users');
    });

    it('render', () => {
      expect(MyComponent.prototype.render()).toEqual(null);
    });
  });
});
