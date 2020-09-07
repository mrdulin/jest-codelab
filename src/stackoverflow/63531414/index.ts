import { Validate } from './validator';

export class Controller {
  @Validate('params')
  async post(request, responseHandler) {
    console.log('real post implementation');
  }
}
