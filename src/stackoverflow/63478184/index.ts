export interface MyInterface {
  someFunc: () => void;
}

export function main(obj: MyInterface) {
  return obj.someFunc();
}
