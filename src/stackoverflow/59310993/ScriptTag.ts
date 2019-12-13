export interface ScriptTagObject {
  src: string;
}

export class ScriptTag {
  localFileName = 'b.js';

  constructor(a, b, c) {}

  protected async exists(): Promise<boolean> {
    const scriptTags: ScriptTagObject[] = await this.fetchAllScriptTags();

    const scriptTagFileNames: string[] = scriptTags.map((scriptTagRecord: ScriptTagObject) => {
      const tagFileName: string = this.getFileName(scriptTagRecord.src);
      return tagFileName;
    });

    console.log(scriptTagFileNames, `=====scriptTagFileNames=====`);
    const fileIsFound: boolean = Boolean(scriptTagFileNames.indexOf(this.localFileName) > -1);
    console.log(fileIsFound, `=====found=====`);
    return fileIsFound;
  }

  protected async fetchAllScriptTags(): Promise<ScriptTagObject[]> {
    return [{ src: 'a' }];
  }

  private getFileName(src) {
    return src;
  }
}
