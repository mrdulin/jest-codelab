import { MyTestClass, IDocument } from './';

// tslint:disable-next-line: variable-name
const __context = () => {};

describe('MyTestClass', () => {
  it('My example test', async () => {
    const document: IDocument = {
      metadata: {
        artist: {
          name: 'An Artist',
          title: null
        }
      }
    };

    const result: any = await new MyTestClass(__context()).map(document);
  });
});
