import {store} from '@risingstack/react-easy-state';

export const state = store({
  selected: '#fff',
});
export const setSelected = (val) => {
  state.selected = val;
  console.log(state.selected);
};
