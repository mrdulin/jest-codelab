import ModelUtility from './ModelUtility';

enum EndpointType {
  SEARCH = 'SEARCH',
}

export class SomeClass {
  schemaConstants;
  errorConstants = {
    invalidQueryParameters: 'invalid',
  };

  search = async (query, endpointConstants) => {
    const searchParam = ModelUtility.buildSearchParameter(query, endpointConstants, this.schemaConstants);
    // check for unknown fields
    const isUnknownFields = ModelUtility.isUnknownFields(EndpointType.SEARCH, searchParam, this.schemaConstants);
    if (isUnknownFields) {
      return this.errorConstants.invalidQueryParameters;
    }
    return this.readAll(query, searchParam, endpointConstants);
  };

  readAll(...args) {
    return 'real data';
  }
}
