const fs = require("fs");
const unzipper = require("./unzipper");
const dir = __dirname + "/";

function unzipFile(fileName, outputPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(fileName) !== true) {
      reject("there is no zip file");
    }
    const createdFile = dir + fileName;
    const stream = fs
      .createReadStream(createdFile)
      .pipe(unzipper.Extract({ path: outputPath }));

    stream.on("finish", () => {
      console.log("file unzipped");
      resolve(outputPath);
    });
  });
}

module.exports = unzipFile;
