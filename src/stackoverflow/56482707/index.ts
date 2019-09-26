import { StudentServices } from './StudentServices';

export class PornClass {
  private errorMessage: string = '';
  constructor(private studentId: string) {}

  public async mounted() {
    return StudentServices.getCollegeurl(this.studentId)
      .then(response => {
        // window.location.href = response.data.collegeurl;
        Object.defineProperty(window, 'location', {
          value: {
            href: response.data.collegeurl
          }
        });
      })
      .catch(response => {
        this.errorMessage = 'errr';
      });
  }
}
