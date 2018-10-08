function getMessage(): string {
  return `Her name is ${genName()}, age is ${getAge()}`;
}

const genName = (): string => 'novaline';

const getAge = (): number => 26;

export default {
  getMessage,
  genName,
  getAge
};

