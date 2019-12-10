export class ScriptTag {
  localFileName = '';
  filePath = 'file.js';
  constructor(storeDomain: string, generalToken: string, filePath: string) {
    this.localFileName = this.getFileName(this.filePath);
  }

  public getFileName(filePathOrUrl: string): string {
    const fileNameMatch: string[] | null = filePathOrUrl.match(/\/{1}(\w+.js)$/);
    if (Boolean(fileNameMatch)) {
      return fileNameMatch![1];
    } else {
      throw Error('Filename not found');
    }
  }
}
