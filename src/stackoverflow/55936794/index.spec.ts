import { addDiscount, ADD_DISCOUNT } from './';
import { discount } from './discount';

describe('addDiscount', () => {
  test('should dispatch action correctly', () => {
    const customerOrderId = 'customer-order-id';
    const mDispatch = jest.fn();
    const mGetState = jest.fn().mockReturnValueOnce({ token: { id: customerOrderId } });
    const putSpy = jest.spyOn(discount, 'put');
    addDiscount({ code: 'abc123' })(mDispatch, mGetState);
    expect(mGetState).toBeCalledTimes(1);
    expect(mDispatch).toBeCalledWith({
      apiCall: { body: { code: 'abc123' }, id: customerOrderId },
      types: ADD_DISCOUNT.triplet
    });
    expect(putSpy).toBeCalledWith({ body: { code: 'abc123' }, id: customerOrderId });
  });
});
