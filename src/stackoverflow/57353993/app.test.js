const app = require('./app');
const request = require('supertest');

describe('57353993', () => {
  // read from XML file
  var itemsXML = '<list><item>item1</item><item>item2</item><item>item3</item></list>';
  var itemList = {
    list: {
      item: ['item1', 'item2', 'item3'],
    },
  };
  it('should pass', async () => {
    const res = await request(app)
      .post('/')
      .set('Content-Type', 'application/xml')
      .send(itemsXML);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(itemList);
  });
});
