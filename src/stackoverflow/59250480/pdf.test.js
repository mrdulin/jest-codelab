const PdfPrinter = require('pdfmake');

jest.mock('pdfmake', () => {
  const mPdfMake = {
    createPdfKitDocument: jest.fn().mockImplementation(() => ({ a: 'b' })),
  };
  return jest.fn(() => mPdfMake);
});

describe('test', () => {
  test('pdf', () => {
    const fonts = {};
    const printer = new PdfPrinter(fonts);
    printer.createPdfKitDocument();
    expect(printer.createPdfKitDocument).toHaveBeenCalledTimes(1);
  });
});
