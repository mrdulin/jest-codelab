class Component {
  get isBottom(): boolean {
    return true;
  }

  public render(): any {
    return this.isBottom;
  }
}

export default Component;
