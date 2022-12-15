import Video from 'react-native-video';

const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  };

const viewStyle = {height: 250};

<Section title="Step One">The example video:</Section>
<View style={viewStyle}>
  <Video
    source={{
      uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    }}
    style={videoStyle}
    controls={true}
    resizeMode="cover"
    hideShutterView={true}
    paused={true}
  />
</View>