import React, {useEffect} from 'react';
import * as store from './store';
import {styles} from './styles';
import {view} from 'react-easy-state';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {baseColor} from '../../utils/constants';
export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Aritmatika',
      headerStyle: {
        // backgroundColor: baseColor.header,
        backgroundColor: baseColor.header,
      },
      headerLeft: null,
    });
  }, [navigation, store]);
  const renderMenu = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          store.state.type = item.name;
          store.state.icon = item.icon;
          store.calculate({navigation});
        }}
        style={styles.button}>
        <Image source={item.icon} style={styles.image} resizeMode="contain" />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{marginBottom: 20}}>Aritmatika</Text> */}
      <FlatList
        numColumns={3}
        data={store.state.allType}
        renderItem={renderMenu}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
});
