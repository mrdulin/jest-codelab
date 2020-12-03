export default class Devices {
  public static connectAudioDevice(device?: InputDeviceInfo): Promise<MediaStream> {
    return new Promise<MediaStream>((resolve, reject) => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          resolve(stream);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  }
}
