import { EmployeesService } from '../services/employeeService';
import { IDBConnection } from '../config/IDBConnection';

export class EmployeesController {
  private employeeService: EmployeesService;

  constructor(dbConnection: IDBConnection) {
    this.employeeService = new EmployeesService(dbConnection);
  }
  public async findAllEmployees(req: any, res: any) {
    const numPerPage = +req.query.pagesize;
    const page = +req.query.page;
    try {
      const count = await this.employeeService.findCount();
      const results = await this.employeeService.findAll(numPerPage, page);
      let totalEmployee = count[0].totalCount;
      if (totalEmployee === 0) {
        return res.status(404).json({
          success: false,
          message: 'Employee not found',
        });
      } else if (count && results) {
        return res.status(200).json({
          employees: results,
          maxEmployees: totalEmployee,
        });
      }
    } catch {
      res.status(500).json({
        success: false,
        message: 'Server error',
      });
    }
  }
}
