const getMemory = () => 1;
const instantiateFanRecursive = (...args) => 2;
const getDrawablesFromLineInstances = (...args) => [];
const printMemory = memory => console.log(memory);

export const itif = (name: string, condition: () => boolean | Promise<boolean>, cb) => {
  it(name, async done => {
    if (await condition()) {
      cb(done);
    } else {
      console.warn(`[skipped]: ${name}`);
      done();
    }
  });
};

describe('test suites', () => {
  itif(
    'functional-approach-2 perforance test',
    async () => process.env.PERFORMANCE_TEST === 'true',
    done => {
      console.info('Functional Approach 2 Performance Test');
      const t0 = Date.now();
      const m0 = getMemory();
      const li0 = instantiateFanRecursive(20, 2, 0, 0, 1, 1, 2, 1);
      const r0 = getDrawablesFromLineInstances(li0);
      printMemory(getMemory() - m0);
      console.info(`Length: ${r0.length}`);
      console.info(`Time Taken: ${Date.now() - t0}ms`);
      done();
    }
  );
});
