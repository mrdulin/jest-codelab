export class SubsciberProgram {
  async findBySubscriberId(userId, programId) {
    return [1, 2];
  }
  async create(userId, programId) {
    return { userId, programId };
  }
}
