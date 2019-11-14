const getOrCreateStore = () => {};

class Svc {
  constructor(domain, getOrCreateStore) {}

  public async getMe() {
    return { data: { mfa_enabled: true } };
  }
}

export default new Svc(process.env.AUTH_API_DOMAIN, getOrCreateStore());
