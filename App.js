import React from 'react';
import Video from 'react-native-video';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const getError = e => {
    console.log(e);
  };
  const working = 'https://serve.nqv.com.ar/force/test.m3u8';
  const notWorking = 'https://serve.nqv.com.ar/force/test2.m3u8'
  
  return (
    <>
      <View>
        <Video
          source={{
            uri: notWorking,
            type: 'm3u8',
            headers: {
              Connection: 'Keep-Alive',
              Accept: 'application/json, text/plain, */*',
              Origin: 'https://nqv.com.ar',
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Request-Method': 'GET',
            },
          }}
          resizeMode={'contain'}
          style={{
            position: 'relative',
            width: '100%',
            height: 200,
          }}
          repeat={false}
          controls={true}
          onError={getError}
        />
      </View>
    </>
  );
};

export default App;
