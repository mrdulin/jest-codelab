export const Validate = (params) => {
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    const oFunc = descriptor.value;
    descriptor.value = function inner(...args: any[]) {
      console.log('real validator decorator implementation');
      // lots of validation
      const rval = oFunc.apply(this, args);
      return rval;
    };
  };
};
