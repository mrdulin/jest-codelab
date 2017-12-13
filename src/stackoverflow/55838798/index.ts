import moment from 'moment';

export function main() {
  return {
    currentDateMoment: moment().format(),
    currentDateFormatted: moment()
      .format('MM-DD-YYYY')
      .valueOf()
  };
}
