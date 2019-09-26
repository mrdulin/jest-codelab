import { dependendantService } from './dependency-service-instance';

export function myFunction(): string {
  const list = dependendantService.list;
  if (!list.length) {
    throw new Error('list is empty');
  }
  return 'xyz';
}
