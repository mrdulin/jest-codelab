import { AjaxService } from './ajaxService';

export const userLogin = data => {
  return AjaxService.post('http://localhost/3000/signin', data).then(
    res => {
      return res.data;
    },
    error => {
      return error.response.data;
    }
  );
};
