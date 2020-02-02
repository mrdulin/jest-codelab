import main from './';
import $ from 'jquery';

jest.mock('jquery', () => jest.fn());

describe('60003884', () => {
  it('should add class', () => {
    const tabButtonRows = [{ scrollWidth: 200 }];
    tabButtonRows.constructor.prototype.scroll = jest.fn().mockImplementationOnce((handler) => {
      handler();
    });
    tabButtonRows.constructor.prototype.outerWidth = jest.fn().mockReturnValueOnce(100);
    tabButtonRows.constructor.prototype.scrollLeft = jest.fn().mockReturnValueOnce(100);
    const tabButtons = { addClass: jest.fn(), removeClass: jest.fn() };

    $.mockImplementation((selector) => {
      switch (selector) {
        case '.all-products-tab-buttons .row':
          return tabButtonRows;
        case '.all-products-tab-buttons':
          return tabButtons;
      }
    });
    main();
    expect(tabButtons.addClass).toBeCalledWith('remove');
  });

  it('should remove class', () => {
    const tabButtonRows = [{ scrollWidth: 200 }];
    tabButtonRows.constructor.prototype.scroll = jest.fn().mockImplementationOnce((handler) => {
      handler();
    });
    tabButtonRows.constructor.prototype.outerWidth = jest.fn().mockReturnValueOnce(100);
    tabButtonRows.constructor.prototype.scrollLeft = jest.fn().mockReturnValueOnce(50);
    const tabButtons = { addClass: jest.fn(), removeClass: jest.fn() };

    $.mockImplementation((selector) => {
      switch (selector) {
        case '.all-products-tab-buttons .row':
          return tabButtonRows;
        case '.all-products-tab-buttons':
          return tabButtons;
      }
    });
    main();
    expect(tabButtons.removeClass).toBeCalledWith('remove');
  });
});
