export class SomeClass {
  async functionToTest(stream) {
    // Run some checks on the stream here
    stream
      .on('data', async data => {
        // Run some checks on the data here
        await this.processStreamData(data);
      })
      .on('finish', () => {
        // Do some processing here
        Promise.resolve();
      });
  }

  async processStreamData(data) {
    console.log(data);
  }
}
