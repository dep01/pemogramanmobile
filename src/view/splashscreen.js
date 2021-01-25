import React, {useEffect} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {icon} from '../utils/constants';

export default ({navigation}) => {
  const timer = async () => {
    setTimeout(() => {
      navigation.replace('/login');
    }, 2000);
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    timer();
  }, [timer]);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Image
        source={icon.ic_react}
        resizeMode="contain"
        style={{width: 100, height: 100}}
      />
      <ActivityIndicator
        size={32}
        color="white"
        style={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};
