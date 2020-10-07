export const notEmpty = (value) => (value === ' ' ? false : true);
export const isEmpty = (value) => !notEmpty(value);
export const isNull = (value) => value === null;
