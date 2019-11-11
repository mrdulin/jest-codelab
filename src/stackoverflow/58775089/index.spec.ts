import { formatBitrate, mapStateToProps } from './';

describe('formatBitrate', () => {
  test('should format bitrate', () => {
    const actualValue = formatBitrate(1024);
    expect(actualValue).toBe('1\u00A0kbps');
  });
  test('should return 0 Bytes', () => {
    const actualValue = formatBitrate(0);
    expect(actualValue).toBe('0 Bytes');
  });
});

describe('mapStateToProps', () => {
  test('should return mapped state', () => {
    const mState = {
      qualityResults: {
        video: {
          mos: 2,
          packetLossRatio: 1,
          bitrate: 1024
        },
        plotData: {
          2333333: {
            bytesReceived: 666
          }
        }
      }
    };
    const actualValue = mapStateToProps(mState);
    expect(actualValue).toEqual({
      plotData: [{ timestamp: 2333333, bytesReceived: 666, seconds: '0s' }],
      mos: '2.0',
      packetLossRatio: '1',
      bitrate: '1\u00A0kbps'
    });
  });
});
