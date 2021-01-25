import {store} from 'react-easy-state';
import {Alert} from 'react-native';
export const state = store({
  count: 0,
  type: '',
  icon: null,
  length: 0,
  label_length: '',
  show_length: false,
  width: 0,
  label_width: '',
  show_width: false,
  radius: 0,
  label_radius: '',
  show_radius: false,
});
export function initialized() {
  switch (state.type) {
    case 'segitiga':
      state.show_length = true;
      state.show_width = true;
      state.show_radius = false;
      state.label_length = 'Tinggi';
      state.label_width = 'Alas';
      state.label_radius = '';

      break;
    case 'layang-layang':
      state.show_length = true;
      state.show_width = true;
      state.show_radius = false;
      state.label_length = 'Diagonal 1';
      state.label_width = 'Diagonal 2';
      state.label_radius = '';

      break;
    case 'jajar genjang':
      state.show_length = true;
      state.show_width = true;
      state.show_radius = false;
      state.label_length = 'Alas';
      state.label_width = 'Tinggi';
      state.label_radius = '';

      break;
    case 'lingkaran':
      state.show_length = false;
      state.show_width = false;
      state.show_radius = true;
      state.label_length = '';
      state.label_width = '';
      state.label_radius = 'Jari-jari';

      break;
    case 'trapesium':
      state.show_length = true;
      state.show_width = true;
      state.show_radius = true;
      state.label_length = 'Sisi 1';
      state.label_width = 'Sisi 2';
      state.label_radius = 'Tinggi';

      break;
    case 'balok' || 'kubus':
      state.show_length = true;
      state.show_width = true;
      state.show_radius = true;
      state.label_length = 'Panjang';
      state.label_width = 'Lebar';
      state.label_radius = 'Tinggi';

      break;
    case 'krucut':
      state.show_length = true;
      state.show_width = false;
      state.show_radius = true;
      state.label_length = 'Tinggi';
      state.label_width = '';
      state.label_radius = 'Jari-jari';

      break;
    case 'bola':
      state.show_length = false;
      state.show_width = false;
      state.show_radius = true;
      state.label_length = '';
      state.label_width = '';
      state.label_radius = 'Jari-jari';

      break;
    case 'tabung':
      state.show_length = true;
      state.show_width = false;
      state.show_radius = true;
      state.label_length = 'Tinggi';
      state.label_width = '';
      state.label_radius = 'Jari-jari';

      break;

    default:
      break;
  }
}
export const setLength = (val) => {
  state.length = val;
};
export const setWidth = (val) => {
  state.width = val;
};
export const setRadius = (val) => {
  state.radius = val;
};
export const calculate = () => {
  var label = '';
  switch (state.type) {
    case 'layang-layang' || 'segitiga':
      state.count = (state.width * state.length) / 2;
      label = 'Luas';
      break;
    case 'jajar genjang':
      state.count = state.width * state.length;
      label = 'Luas';
      break;
    case 'lingkaran':
      state.count = 3.14 * state.radius * state.radius;
      label = 'Luas';
      break;
    case 'trapesium':
      state.count = ((state.width + state.length) * state.radius) / 2;
      label = 'Luas';
      break;
    case 'kubus' || 'balok':
      state.count = state.width * state.length * state.radius;
      label = 'Volume';
      break;
    case 'krucut':
      state.count = (3.14 * state.radius * state.radius * state.length) / 3;
      label = 'Volume';
      break;
    case 'bola':
      state.count = (4 / 3) * 3.14 * state.radius * state.radius * state.radius;
      label = 'Volume';
      break;
    case 'tabung':
      state.count = 3.14 * state.radius * state.radius * state.length;
      label = 'Volume';
      break;
  }
  Alert.alert(label, label + 'nya adalah ' + state.count + ' cm', [
    {
      text: 'close',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
  ]);
};
