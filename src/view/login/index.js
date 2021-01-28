import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {view} from 'react-easy-state';
import {Input} from 'react-native-elements';
import {icon} from '../../utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as store from './store';
import * as globalStore from '../../utils/global_state';

import {styles} from './styles';
const ButtonIcon = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
      }}>
      <Icon
        size={props.size * 0.8}
        name={props.icon}
        color="black"
        style={{margin: 'auto'}}
      />
    </TouchableOpacity>
  );
};

export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [store]);
  return (
    <View style={styles.container}>
      <Image
        style={{width: 150, height: 150, marginBottom: 80, marginTop: 50}}
        source={icon.ic_profile}
      />
      <View style={styles.inputBox}>
        <Input
          style={styles.inputText}
          label="Username"
          onChangeText={(val) => store.setUsername(val)}
        />
        <Input
          onChangeText={(val) => {
            store.setPassword(val);
          }}
          secureTextEntry={store.state.isShow}
          style={styles.inputText}
          label="Password"
          rightIcon={
            <ButtonIcon
              onPress={() => store.showPass()}
              size={30}
              icon={store.state.isShow ? 'low-vision' : 'eye'}
            />
          }
        />

        <TouchableOpacity
          onPress={() => {
            globalStore.globalState.username = store.state.username;
            store.onLogin({navigation});
          }}
          style={styles.buttonLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
