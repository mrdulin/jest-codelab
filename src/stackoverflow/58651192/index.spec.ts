import { getPrice, evalCallback } from './';

const page = {
  $: jest.fn(),
  $eval: jest.fn()
};

beforeEach(() => {
  jest.resetAllMocks();
});

test('should eval', async () => {
  page.$.mockResolvedValueOnce(true);
  page.$eval.mockReturnValueOnce('dummy data');
  const actualValue = await getPrice(page, 'example.com');
  expect(actualValue).toBe('dummy data');
  expect(page.$).toBeCalledWith('#price');
  expect(page.$eval).toBeCalledWith('#price', expect.any(Function));
});

test('should return null', async () => {
  page.$.mockResolvedValueOnce(false);
  const actualValue = await getPrice(page, 'example.com');
  expect(actualValue).toBeNull();
  expect(page.$).toBeCalledWith('#price');
  expect(page.$eval).not.toBeCalled();
});

test('evalCallback', () => {
  const actualValue = evalCallback({ innerText: 'unit test' });
  expect(actualValue).toBe('unit test');
});
