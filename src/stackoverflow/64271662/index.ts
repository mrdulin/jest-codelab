export class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}
export const invert = (str) => {
  if (str === '') throw new ValidationError('String must no be empty.');
  return str;
};
