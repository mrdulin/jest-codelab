export class OriginalClass {
  public static call() {
    return 'real data';
  }

  public static testCall() {
    return this.call();
  }
}
