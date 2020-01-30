import * as mod from '.';

describe('59947808', () => {
  test('expect nodeList to be nodelist', () => {
    let nodeList = document.querySelectorAll('div');
    console.log('nodeList: ', nodeList);
    expect(mod.$isNodeList(nodeList)).toBe(true);
  });

  test('expect htmlCollection not to be nodelist', () => {
    let htmlCollection = document.getElementsByTagName('div');
    console.log('htmlCollection: ', htmlCollection);
    expect(mod.$isNodeList(htmlCollection)).toBe(false);
  });
});
