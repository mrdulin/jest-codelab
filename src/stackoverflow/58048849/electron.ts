export const ipcRenderer = {
  events: {},
  on(event, handler) {
    this.events[event] = handler;
  },
  send(event, data) {
    this.events[event](event, data);
  },
  removeAllListeners(event) {
    this.events[event] = undefined;
  }
};
