import React, {useState, useEffect, useReducer} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import * as store from './store';
import {view} from 'react-easy-state';
import {baseColor} from '../../utils/constants';
import {WebView} from 'react-native-webview';
export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'SoundCloud',
      style: {backgroundColor: 'white'},
      headerStyle: {
        // backgroundColor: baseColor.header,
        backgroundColor: baseColor.header,
      },
      headerLeft: null,
    });
  }, [navigation, store]);
  return <View style={styles.page}>{store.WebViewLoad()}</View>;
});
