import { EmployeesController } from './controllers/employeeController';
import { EmployeesService } from './services/employeeService';

jest.mock('./services/employeeService', () => {
  const mEmployeesService = {
    findCount: jest.fn(),
    findAll: jest.fn(),
  };
  return { EmployeesService: jest.fn(() => mEmployeesService) };
});

describe('Employees', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('should get count of employees', async () => {
    const mIDBConnection = {};
    const employeeService = new EmployeesService(mIDBConnection);
    (employeeService.findCount as jest.MockedFunction<any>).mockResolvedValueOnce([{ totalCount: 5 }]);
    (employeeService.findAll as jest.MockedFunction<any>).mockResolvedValueOnce([{ id: 1, name: 'john' }]);

    const mReq = {
      query: {
        pagesize: 10,
        page: 1,
      },
    };
    const mRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const employeesController = new EmployeesController(mIDBConnection);
    await employeesController.findAllEmployees(mReq, mRes);
    expect(employeeService.findCount).toHaveBeenCalledTimes(1);
    expect(employeeService.findAll).toBeCalledWith(10, 1);
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.status().json).toBeCalledWith({ employees: [{ id: 1, name: 'john' }], maxEmployees: 5 });
  });
});
