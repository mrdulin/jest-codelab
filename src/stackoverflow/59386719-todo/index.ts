export function initScheduler(timeout: number, callback: () => Promise<void>): void {
  console.count('initScheduler');
  setTimeout(() => {
    callback().then(() => {
      console.count('internal');
      initScheduler(timeout, callback);
    });
  }, timeout);
}
