export const api = {
  async getVehicles() {
    return { vehicles: [{ active: true }] };
  },

  async getCurrentMoto() {
    return { name: 'real name' };
  }
};
