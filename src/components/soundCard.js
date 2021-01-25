import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
var Sound = require('react-native-sound');
var Cances = new Sound(require('../assets/audio/A_Chance_of_Sunshine.mp3'));
export const SoundCard = ({title = '', duration = '0'}) => {
  const [play, set_play] = useState(Cances.isPlaying());
  function PlaySound() {
    set_play(!play);
    Cances.play();
  }
  function PauseSound() {
    set_play(!play);
    Cances.pause();
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <TouchableOpacity
          onPress={() => {
            play ? PauseSound() : PlaySound();
          }}
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}>
          <Icon name={play ? 'pause' : 'play'} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text>A Chance of Sunshine</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '10%',
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#1f1f1f',
  },
  containerTitle: {
    flex: 1,
    height: '100%',
    marginHorizontal: 5,
    // marginVertical: 5,
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerImage: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'green',
  },
});
