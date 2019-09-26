import { PornClass } from './';
import { StudentServices } from './StudentServices';

jest.mock('./StudentServices.ts', () => {
  const mockedStudentServices = {
    getCollegeurl: jest.fn()
  };
  return {
    StudentServices: mockedStudentServices
  };
});

describe('PornClass', () => {
  describe('#mounted', () => {
    it('should get college url and redirect correctly', async () => {
      const studentId = '1';
      const collegeurl = 'http://github.com/mrdulin';
      const porn = new PornClass(studentId);
      (StudentServices.getCollegeurl as jest.MockedFunction<
        typeof StudentServices.getCollegeurl
      >).mockResolvedValueOnce({ data: { collegeurl } });

      await porn.mounted();
      expect(StudentServices.getCollegeurl).toBeCalledWith(studentId);
      expect(window.location.href).toBe(collegeurl);
    });
  });
});
