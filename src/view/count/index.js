import React, {useEffect} from 'react';
import {view} from 'react-easy-state';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';
import * as store from './store';
import {Input} from 'react-native-elements';
import {styles} from './styles';
import {baseColor} from '../../utils/constants';
import {state} from '../home/store';
export default view(({navigation, route}) => {
  useEffect(() => {
    store.state.type = route.params.type;
    store.state.icon = route.params.icon;
    store.initialized();
    navigation.setOptions({
      title: store.state.type.toUpperCase(),
      headerStyle: {
        backgroundColor: baseColor.header,
      },
      headerLeft: () => (
        <HeaderBackButton
          tintColor={baseColor.text}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, store]);
  return (
    <View style={styles.container}>
      <Image
        source={store.state.icon}
        resizeMode="contain"
        style={{width: 150, height: 150}}
      />
      <View style={styles.inputBox}>
        {store.state.show_length == false ? null : (
          <Input
            style={styles.inputText}
            label={store.state.label_length + ' (cm)'}
            keyboardType="numeric"
            onChangeText={(val) => store.setLength(val)}
          />
        )}
        {store.state.show_width == false ? null : (
          <Input
            style={styles.inputText}
            label={store.state.label_width + ' (cm)'}
            keyboardType="numeric"
            onChangeText={(val) => store.setWidth(val)}
          />
        )}
        {store.state.show_radius == false ? null : (
          <Input
            style={styles.inputText}
            label={store.state.label_radius + ' (cm)'}
            keyboardType="numeric"
            onChangeText={(val) => store.setRadius(val)}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            store.calculate();
            console.log(store.state.count);
          }}
          style={styles.button}>
          <Text style={styles.text}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
