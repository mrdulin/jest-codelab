import moment from 'moment-timezone';

export function main() {
  return moment.tz.guess();
}
