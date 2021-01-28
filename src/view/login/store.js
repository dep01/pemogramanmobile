import {store} from 'react-easy-state';
import {ToastAndroid} from 'react-native';
export const state = store({
  username: '',
  password: '',
  isShow: true,
});
export const setPassword = (val) => {
  state.password = val;
  console.log(val);
};
export const setUsername = (val) => {
  state.username = val;
  console.log(state.username);
};
export const showPass = () => {
  state.isShow = !state.isShow;
};
export const onLogin = ({navigation}) => {
  if (state.username == '' || state.password == '') {
    ToastAndroid.show(
      state.username == ''
        ? 'Username tidak boleh kosong!'
        : 'Password tidak boleh kosong!',
      ToastAndroid.SHORT,
      ToastAndroid.SHORT,
    );
  } else {
    if (state.username == 'admin' && state.password == 'admin') {
      navigation.navigate('/welcome');
    } else {
      ToastAndroid.show(
        'Username atau password salah!',
        ToastAndroid.SHORT,
        ToastAndroid.SHORT,
      );
    }
  }
};
