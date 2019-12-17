export default class BookLogger {
  public static LOG_LEVEL = {
    INFO: 'INFO',
  };
  public static getLogger(name, level) {
    return {
      error: (message) => {
        console.error(message);
      },
    };
  }
}
