import request from 'request-promise';
import csv from 'csvtojson';
import os from 'os';
import { defaultsDeep } from 'lodash';

export async function remoteCSVToJSON<T>(url: string, options: any) {
  const defaultOptions = {
    noheader: false,
    delimiter: ',',
    workerNum: os.cpus().length
  };
  const finalOptions = defaultsDeep(options, defaultOptions);
  const datas: T[] = [];
  return new Promise<T[]>((resolve, reject) => {
    request.get(url).then(res => {
      csv(finalOptions)
        .fromString(res)
        .on('json', (jsonObj: T) => datas.push(jsonObj))
        .on('error', err => reject(err))
        .on('end', () => {
          console.info('convert csv to json done');
          resolve(datas);
        });
    });
  });
}
