import { serverErrorResponseUtil, HttpError } from './serverErrorResponseUtil';

const validateUniqueName = (value: string, service: any, name: string): string =>
  service()
    .then(({ data }: { data: object }) => {
      if (Array.isArray(data) && data.find(resourceData => resourceData.name === value)) {
        throw new Error(`${name} already exists`);
      }
    })
    .catch((error: HttpError) => {
      throw serverErrorResponseUtil(error);
    });

export default validateUniqueName;
