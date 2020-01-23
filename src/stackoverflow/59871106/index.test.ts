import { studentAPIGetHandler } from './';
import { StudentService } from './student.service';

describe('59871106', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should get student info', async () => {
    jest.spyOn(StudentService, 'getStudentInfo').mockReturnValueOnce({});
    const mEvent = { studentInfo: { studentID: 1 } };
    await studentAPIGetHandler(mEvent);
    expect(StudentService.getStudentInfo).toBeCalledWith(1);
  });

  it('should handle error', async () => {
    const mError = new Error('some error');
    jest.spyOn(StudentService, 'getStudentInfo').mockImplementationOnce(() => {
      throw mError;
    });
    jest.spyOn(console, 'error');
    const mEvent = { studentInfo: { studentID: 1 } };
    await expect(studentAPIGetHandler(mEvent)).rejects.toThrowError(
      JSON.stringify({ apiName: 'Student_Message', myMessage: 'Unable to get student API response' }),
    );
    expect(console.error).toBeCalledWith('Unable to get student API response', mError);
    expect(StudentService.getStudentInfo).toBeCalledWith(1);
  });
});
