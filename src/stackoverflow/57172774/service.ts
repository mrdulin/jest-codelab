class Service {
  public get() {
    return 'real data';
  }
  public post() {}
  public del() {}
  public doThis() {
    console.log('real do this');
    return this.get();
  }
}
export { Service };
