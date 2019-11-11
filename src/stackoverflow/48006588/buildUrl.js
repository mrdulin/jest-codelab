import config from './config';

export function buildUrl(contentId, data, options = {}) {
  let baseUrl = config.has('imgBaseUrl') && config.get('imgBaseUrl');
  if (!baseUrl) {
    throw new Error('some error');
  }
  console.log(baseUrl);
}
