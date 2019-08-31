interface ExecutionContext {
  switchToHttp(): any;
}
interface CallHandler {
  handle(): any;
}
interface Observable<T> {}
interface ExampleModel {}

interface NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<ExampleModel>>;
}

export class SubscriberInterceptor implements NestInterceptor {
  public async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<ExampleModel>> {
    let body: ExampleModel = context.switchToHttp().getRequest().body;
    body = {
      ...body,
      addedAttribute: 'example'
    };
    context.switchToHttp().getRequest().body = body;
    return next.handle();
  }
}
