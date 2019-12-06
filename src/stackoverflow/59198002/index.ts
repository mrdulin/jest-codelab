export class AgeVerification {
  public onDeclineCallback = () => {
    console.log('boom ' + document.referrer);

    if (document.referrer === '') {
      console.log('redirect to our age policy page');
    } else {
      history.back();
    }
  };
}
