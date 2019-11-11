export const formatBitrate = bitrate => {
  if (bitrate === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const sizes = ['Bytes', 'kbps', 'mbps', 'gbps', 'tbps', 'pbps', 'ebps', 'zbps', 'ybps'];
  const i = Math.floor(Math.log(bitrate) / Math.log(k));

  return `${parseFloat((bitrate / k ** i).toFixed(0))}\u00A0${sizes[i]}`;
};

export const mapStateToProps = state => {
  let plotData = state.qualityResults.plotData;
  const lastTimestamp = Number(Object.keys(plotData)[0]);
  plotData = Object.keys(plotData).map(key => ({
    timestamp: Number(key),
    bytesReceived: plotData[key].bytesReceived,
    seconds: `${Math.ceil(Math.abs(Number(key) - lastTimestamp) / 1000)}s`
  }));

  return {
    plotData,
    mos: Number(state.qualityResults.video.mos).toFixed(1),
    packetLossRatio: Number(state.qualityResults.video.packetLossRatio).toFixed(0),
    bitrate: formatBitrate(state.qualityResults.video.bitrate)
  };
};
