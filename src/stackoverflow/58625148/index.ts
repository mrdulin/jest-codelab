import { writeFile } from 'fs-extra';
import { resolve as pathResolve } from 'path';

export default async function generateFile(value): Promise<void> {
  await writeSampleFile(value);
}

async function writeSampleFile(value: string): Promise<void> {
  try {
    await writeFile(pathResolve('some path'), value, 'utf8');
  } catch (err) {}
}
