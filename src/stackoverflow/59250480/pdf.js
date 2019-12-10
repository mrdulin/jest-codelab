const PdfPrinter = require('pdfmake');
// const fonts = require('./../shared/fonts')
const fonts = {};

const printer = new PdfPrinter(fonts);

const intiateDocCreation = (docDefinition) => printer.createPdfKitDocument(docDefinition);

const finishDocCreation = (pdfDoc, pdfStream) => {
  pdfDoc.pipe(pdfStream);
  pdfDoc.end();
};

module.exports = {
  intiateDocCreation,
  finishDocCreation,
};
