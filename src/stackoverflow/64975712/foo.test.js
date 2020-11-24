const jsdom = require('jsdom');
const path = require('path');
const fs = require('fs');
const { JSDOM } = jsdom;

describe('64975712', () => {
  it('should pass', async () => {
    const html = fs.readFileSync(path.resolve(__dirname, './foo.html'), 'utf8');
    const logSpy = jest.spyOn(console, 'log');
    const virtualConsole = new jsdom.VirtualConsole();
    virtualConsole.sendTo(console);
    const dom = new JSDOM(html, {
      url: 'http://foo.exmaple.org',
      virtualConsole,
      runScripts: 'dangerously',
    });
    expect(dom.window).toHaveProperty('hasFoo');
    expect(dom.window.hasFoo).toBeTruthy();
    expect(logSpy).toBeCalledWith(' hasFoo > ', true);
    expect(dom.serialize()).toMatchInlineSnapshot(`
      "<html><head>
          <title>Hello Jest!</title>
        </head>
        <body>
          <script type=\\"text/javascript\\">
            var hasFoo = false;
            if (window.location.href.indexOf('foo') != -1) {
              hasFoo = true;
            }
            console.log(' hasFoo > ', hasFoo);
          </script>
        

      </body></html>"
    `);
    logSpy.mockRestore();
  });
});
