export interface INewArtist {
  name: string;
  title: string | null;
}

export interface IDocument {
  metadata: {
    artist: INewArtist;
  };
}

export class MyTestClass {
  constructor(private readonly ctx) {}
  public async map(document: IDocument) {
    const artist: INewArtist = document.metadata.artist;
  }
}
