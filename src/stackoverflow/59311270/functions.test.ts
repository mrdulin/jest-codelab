import * as Functions from './functions';
import { IEventData } from './functions';

describe('processEvent', () => {
  let processor: (event: IEventData) => {};
  let getEventTypeSpy: jest.SpyInstance;
  let event: IEventData;

  beforeEach(() => {
    processor = Functions.processEvent();
    getEventTypeSpy = jest.spyOn(Functions as any, 'getEventType');
    event = {} as IEventData;
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should pass', () => {
    getEventTypeSpy.mockReturnValueOnce('message');
    const actual = processor(event);
    expect(actual).toBe('message');
    expect(getEventTypeSpy).toBeCalledWith(event);
  });
});
