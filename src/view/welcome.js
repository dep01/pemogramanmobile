import React, {useEffect} from 'react';
import {ActivityIndicator, Image, View, Text} from 'react-native';
import {icon} from '../utils/constants';

export default ({navigation}) => {
  const timer = async () => {
    setTimeout(() => {
      navigation.replace('/home');
    }, 3000);
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
        source={icon.ic_profile}
        resizeMode="contain"
        style={{width: 100, height: 100, marginBottom: 15}}
      />
      <Text>Hello Diaz!</Text>
      <Text>I'm happy to see you :)</Text>
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
