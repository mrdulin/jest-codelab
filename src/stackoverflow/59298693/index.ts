import cloneDeep from 'lodash/cloneDeep';

export class SomeClass {
  public static transformBoardBasicInfo(rawBoard: any): any {
    const clonedBoard: any = cloneDeep(rawBoard) as any;
    clonedBoard.info = this.getInfo(rawBoard);
    return clonedBoard;
  }

  public static getInfo(board) {
    return '';
  }
}
