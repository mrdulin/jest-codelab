class HttpResponse {
  public status = 0;
  public setSuccess(status, message, payload) {
    this.status = status;
  }
  public setReject(...args) {}
}

export default HttpResponse;
