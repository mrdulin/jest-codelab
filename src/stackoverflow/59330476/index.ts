export class SomeClass {
  INCREMENT = 1;
  MIN_SCALE = 2;
  public zoomOut(this: any): void {
    const scaleVal = this.getFloorVar() || this.INCREMENT || this.MIN_SCALE;
    this.updateZoom(scaleVal);
  }

  public getFloorVar() {
    return 0;
  }

  public updateZoom(scaleVal) {
    console.log(scaleVal);
  }
}
