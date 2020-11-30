const t1 = () => 't';
const t2 = () => 't';

test.each([t1, t2])('test function %p', (f) => {
  console.log(`test function ${f.name}`);
  expect(f()).toBe('t');
});
