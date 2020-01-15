export class SomeComponent {
  panelEl = {
    nativeElement: document.createElement('div'),
  };

  popoverEscape = (e) => {
    const popover = this.panelEl.nativeElement.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const left = popover.left + scrollLeft;
    const right = popover.left + scrollLeft + popover.width;
    const top = popover.top + scrollTop;
    const bottom = popover.top + scrollTop + popover.height;

    if (!this.isBetween(e.clientX, left, right) || !this.isBetween(e.clientY, top, bottom)) {
      this.closePopover();
    }
  };

  isBetween(n, a, b) {
    return (n - a) * (n - b) <= 0;
  }

  closePopover() {}
}
