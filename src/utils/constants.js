import {Appearance} from 'react-native-appearance';

export const icon = {
  ic_profile: require('../assets/ic/ic_profile.png'),
  ic_splash: require('../assets/ic/ic_splash.png'),
  ic_splash_1: require('../assets/ic/ic_splash_1.png'),
  ic_react: require('../assets/ic/ic_react.png'),
  ic_balok: require('../assets/ic/ic_balok.png'),
  ic_jajar: require('../assets/ic/ic_jajar.png'),
  ic_krucut: require('../assets/ic/ic_krucut.png'),
  ic_kubus: require('../assets/ic/ic_kubus.png'),
  ic_layang: require('../assets/ic/ic_layang.png'),
  ic_lingkaran: require('../assets/ic/ic_lingkaran.png'),
  ic_segitiga: require('../assets/ic/ic_segitiga.png'),
  ic_tabung: require('../assets/ic/ic_tabung.png'),
  ic_bola: require('../assets/ic/ic_bola.png'),
  ic_trapesium: require('../assets/ic/ic_trapesium.png'),
};
const mode = Appearance.getColorScheme();
export const baseColor = {
  header: mode == 'dark' ? '#121212' : '#ffffff',
  body: mode == 'dark' ? '#1F1F1F' : '#f5f5f5',
  text: mode == 'dark' ? 'white' : 'black',
};
export const colors = {
  body1: mode == 'dark' ? '#002766' : '#bae7ff',
  body2: mode == 'dark' ? '#00474f' : '#b5f5ec',
  body3: mode == 'dark' ? '#237804' : '#b7eb8f',
  body4: mode == 'dark' ? '#820014' : '#ffa39e',
  body5: mode == 'dark' ? '#434343' : '#d9d9d9',
  body6: mode == 'dark' ? '#10239e' : '#adc6ff',
  text: mode == 'dark' ? '#fff' : '#000',
};
