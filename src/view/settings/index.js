import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {Input} from 'react-native-elements';
import {icon, colors, baseColor} from '../../utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as store from './store';
import * as globalStore from '../../utils/global_state';
import {styles} from './styles';

export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const renderMenu = ({item, index}) => {
    // console.log(item);
    return (
      //   <View>
      <TouchableOpacity
        key={index}
        onPress={() => {
          //   store.state.selected = item;
          store.setSelected(item);
          //   globalStore.globalState.color = item;
        }}
        // backgroundColor={item}
        style={[styles.button, {backgroundColor: item}]}>
        {store.state.selected == item ? (
          <Icon name="check" color={baseColor.text} />
        ) : null}
      </TouchableOpacity>
      //   </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Input
          style={styles.inputText}
          label="Username"
          onChangeText={(val) => {
            globalStore.globalState.username = val;
          }}
        />
        <Input
          onChangeText={(val) => {
            globalStore.globalState.password = val;
          }}
          style={styles.inputText}
          label="Password"
        />
        <Input
          onChangeText={(val) => {
            globalStore.globalState.npm = val;
          }}
          style={styles.inputText}
          label="NPM"
        />
        <Text style={{textAlign: 'left', width: '100%', marginBottom: 20}}>
          Pick your colors! {store.state.selected}
        </Text>
        <FlatList
          numColumns={3}
          data={colors}
          style={{width: '70%', minHeight: 120}}
          renderItem={renderMenu}
          keyExtractor={(item, index) => index.toString()}
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
