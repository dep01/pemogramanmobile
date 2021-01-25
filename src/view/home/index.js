import React, {useState, useEffect, useReducer} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import * as store from './store';
import {view} from 'react-easy-state';
import {baseColor} from '../../utils/constants';
import {SoundCard} from '../../components/soundCard';
export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Audio',
      style: {backgroundColor: 'white'},
      headerStyle: {
        // backgroundColor: baseColor.header,
        backgroundColor: baseColor.header,
      },
      headerLeft: null,
    });
  }, [navigation]);
  return (
    <View style={styles.page}>
      <SoundCard duration="xx" title="yy" />
    </View>
  );
});
