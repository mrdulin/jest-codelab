export class SomeClass {
  ws;
  run() {
    const WebSocket = require("ws");
    const url = "";
    this.ws = new WebSocket(url);
    return new Promise((resolve, reject) => {
      this.ws.on("open", () => {
        resolve();
      });
      this.ws.on("error", err => {
        reject(err);
      });
    });
  }
}
