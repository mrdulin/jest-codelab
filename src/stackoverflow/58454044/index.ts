(global as any).check = false;

export const doStuff = () => 'doStuff';
export const doOtherStuff = () => 'doOtherStuff';

export function myFunction() {
  if ((global as any).check) {
    doStuff();
  } else {
    doOtherStuff();
  }
}
