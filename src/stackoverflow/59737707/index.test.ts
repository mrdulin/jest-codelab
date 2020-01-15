import { SomeComponent } from './';

describe('59737707', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  describe('#popoverEscape', () => {
    it('should close popover if first isBetween return falsy', () => {
      Object.defineProperty(window, 'pageXOffset', { value: 100 });
      document.documentElement.scrollTop = 200;
      const comp = new SomeComponent();
      const rect = { left: 10, width: 20, top: 10, height: 50 };
      jest.spyOn(comp.panelEl.nativeElement, 'getBoundingClientRect').mockReturnValueOnce(rect as DOMRect);
      jest.spyOn(comp, 'isBetween').mockReturnValueOnce(false);
      comp.closePopover = jest.fn();
      const mEvent = { clientX: 100, clientY: 200 };
      comp.popoverEscape(mEvent);
      expect(comp.panelEl.nativeElement.getBoundingClientRect).toBeCalledTimes(1);
      expect(comp.closePopover).toBeCalledTimes(1);
      expect(comp.isBetween).toBeCalledTimes(1);
    });

    it('should close popover if second isBetween return falsy', () => {
      Object.defineProperty(window, 'pageXOffset', { value: 100 });
      document.documentElement.scrollTop = 200;
      const comp = new SomeComponent();
      const rect = { left: 10, width: 20, top: 10, height: 50 };
      jest.spyOn(comp.panelEl.nativeElement, 'getBoundingClientRect').mockReturnValueOnce(rect as DOMRect);
      jest
        .spyOn(comp, 'isBetween')
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);
      comp.closePopover = jest.fn();
      const mEvent = { clientX: 100, clientY: 200 };
      comp.popoverEscape(mEvent);
      expect(comp.panelEl.nativeElement.getBoundingClientRect).toBeCalledTimes(1);
      expect(comp.closePopover).toBeCalledTimes(1);
      expect(comp.isBetween).toBeCalledTimes(2);
    });
  });
});
