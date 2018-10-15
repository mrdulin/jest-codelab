import { IMessage } from './cloud-function';

interface IPubsubEvent {
  data: {
    data: IMessage;
  };
}
export { IPubsubEvent };
