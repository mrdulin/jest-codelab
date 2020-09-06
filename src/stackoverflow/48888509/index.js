import { Socket } from 'net';

const EIP_PORT = 3000;
const encapsulation = {
  registerSession() {
    return 'session';
  },
};

export class ENIP extends Socket {
  constructor() {
    super();
    this.state = {
      session: { id: null, establishing: false, established: false },
      error: { code: null, msg: null },
    };
  }

  connect(IP_ADDR) {
    const { registerSession } = encapsulation;
    this.state.session.establishing = true;

    return new Promise((resolve) => {
      super.connect(EIP_PORT, IP_ADDR, () => {
        this.state.session.establishing = false;
        this.write(registerSession());
        resolve();
      });
    });
  }
}
