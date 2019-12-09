import { IDBConnection } from '../config/IDBConnection';

export class EmployeesService {
  private connection: any;

  constructor(connection: IDBConnection) {
    this.connection = connection;
  }
  async findCount() {
    const results = await this.connection.execute('SELECT count(*) as totalCount FROM EmployeeDB.Employees');
    return results; // [ RowDataPacket { totalCount: 5 } ]
  }
  async findAll(numPerPage, page) {
    return [];
  }
}
