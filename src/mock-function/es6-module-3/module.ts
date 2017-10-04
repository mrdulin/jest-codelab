export function getMessage(num?: number): string {
  return `Her name is ${genName(num)}, age is ${getAge()}`;
}

export function genName(num?: number): string {
  return 'novaline';
}

export function getAge(): number {
  return 26;
}
