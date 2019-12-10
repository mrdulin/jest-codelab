import { ScriptTag } from './ScriptTag';

describe('ScriptTag', () => {
  it('should pass', () => {
    jest.spyOn(ScriptTag.prototype, 'getFileName').mockImplementation(() => 'scriptTag.js');
    const scriptTag: ScriptTag = new ScriptTag('subdomain.shopify.com', 'generalTokenValue', '../path/to/file.js');
    expect(scriptTag.localFileName).toEqual('scriptTag.js');
    expect(scriptTag.getFileName).toBeCalled();
  });
});
