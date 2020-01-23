import { StudentService } from './student.service';

type SNSEvent = any;
const SuudentAPIName = { Student_Message: 'Student_Message' };
const logger = console;

export const studentAPIGetHandler = async (event: SNSEvent): Promise<any> => {
  try {
    const studentID = event.studentInfo.studentID;
    const studentPortal = StudentService.getStudentInfo(studentID);
  } catch (error) {
    const studentErrorRes = {
      apiName: SuudentAPIName.Student_Message,
      myMessage: 'Unable to get student API response',
    };
    logger.error(studentErrorRes.myMessage, error);
    throw Error(JSON.stringify(studentErrorRes));
  }
};
