import { SubsciberProgram } from './SubsciberProgram';

export class ProgramService {
  subsciberProgram;
  constructor() {
    this.subsciberProgram = new SubsciberProgram();
  }
  async subscribeUser(data) {
    try {
      const { msisdn, userId, programId, uuid } = data;

      if ((await this.subsciberProgram.findBySubscriberId(userId, programId)).length) {
        throw { code: 500, message: 'You have already subscribed' };
      }

      return await this.subsciberProgram.create(userId, programId);
    } catch (error) {
      throw error;
    }
  }
}
