import Approval from './interfaces/Approval';
import apiClient from './axiosConfig';
import { AxiosResponse } from 'axios';

export default class ExampleService {
  public async getApprovals(id?: string) {
    if (id != null || id !== undefined) {
      return await apiClient.get(`/api/approval/${id}`).then((response: AxiosResponse<Approval>) => {
        return response.data;
      });
    } else {
      return await apiClient.get('/api/approval').then((response: AxiosResponse<Approval[]>) => {
        return response.data;
      });
    }
  }

  public async postApproval(approval: Approval) {
    return await apiClient.post('/api/approval', approval);
  }

  public async putAppoval(id: string, approval: Approval) {
    return await apiClient.put(`/api/approval/${id}`, approval);
  }

  public async deleteApproval(id: string) {
    return await apiClient.delete(`/api/approval/${id}`);
  }
}
