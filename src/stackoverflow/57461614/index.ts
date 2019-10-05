import { socket } from './socket';

export const obj = {
  someMethod() {
    this.handleFerret = this.handleFerret.bind(this);
    socket.emit('ferret', 'tobi', this.handleFerret);
  },

  handleFerret(data) {
    const a = 5;
    this.sum(a, data);
  },

  sum(a, b) {
    //
  }
};
