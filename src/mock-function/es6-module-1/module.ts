const genName = (): string => 'novaline';
const getAge = (): number => 26;

function getMessage(): string {
  return `Her name is ${genName()}, age is ${getAge()}`;
}

export default {
  getMessage,
  genName,
  getAge
};
