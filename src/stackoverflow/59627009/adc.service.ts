export default class ADCServices {
  public static async getUserInfo() {
    return {
      session: {
        tammUserInfo: {
          Type: 'real type',
        },
      },
    };
  }
}
