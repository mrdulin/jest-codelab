export interface HttpError {
  message: string;
}

export function serverErrorResponseUtil(error: HttpError) {
  return new Error(error.message);
}
