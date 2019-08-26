import { PubSub } from './pubsub';

class UserService {
  public static findById() {
    return 'slideshowp2';
  }

  public static create() {
    PubSub.publish('new user');
  }
}

export { UserService };
