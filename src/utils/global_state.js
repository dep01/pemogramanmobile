import {store} from 'react-easy-state';
import {colors} from '../utils/constants';
export const globalState = store({
  username: '',
  password: '',
  npm: '',
  color: colors.body1,
  text: colors.text,
});
