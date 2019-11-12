import { addToShoppingList } from '.';

const mockData = {
  items: [
    {
      productInfo: {
        name: 'Butter',
        manufacturer: 'Land O Lakes'
      }
    },
    {
      productInfo: {
        name: 'Butter',
        manufacturer: 'Breakstone'
      }
    },
    {
      productInfo: {
        name: 'Butter',
        manufacturer: 'Kerrygold'
      }
    }
  ]
};

describe('addToShoppingList', () => {
  it('should call fetch with correct arguments', async () => {
    const mockProducts = jest.fn().mockReturnValue(mockData);
    const actualValue = await addToShoppingList('product 1', 100, mockProducts);
    expect(actualValue).toEqual(['Butter from Land O Lakes']);
    expect(mockProducts).toBeCalledWith('product', 100);
  });
});
