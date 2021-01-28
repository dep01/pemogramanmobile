import {store} from 'react-easy-state';
import {WebView} from 'react-native-webview';
import React from 'react';

export const WebViewLoad = () => {
  return (
    <WebView
      androidHardwareAccelerationDisabled={true}
      style={{flex: 1}}
      source={{uri: 'https://soundcloud.com/'}}
    />
  );
};
// export const [iniString, setIniString] = useState('aa');
