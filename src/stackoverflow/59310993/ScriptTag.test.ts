import { ScriptTag, ScriptTagObject } from './ScriptTag';

class ScriptTagTester extends ScriptTag {
  constructor(a, b, c) {
    super(a, b, c);
  }
}

describe('ScriptTag', () => {
  test('exists() returns false for no matching scriptTag from fake fetch', async () => {
    const dummyScriptTagsMissingTarget: ScriptTagObject[] = [
      { src: 'somescript.js' },
      { src: 'somescript2.js' },
      { src: 'somescript3.js' },
      { src: 'scriptTag.js' },
    ];
    jest
      .spyOn(ScriptTagTester.prototype as any, 'fetchAllScriptTags')
      .mockResolvedValueOnce(dummyScriptTagsMissingTarget);

    const scriptTagTester = new ScriptTagTester('', '', 'https://firebaseDomain.com/scriptTag.js');
    await expect((scriptTagTester as any).exists()).resolves.toStrictEqual(false);
  });
});
