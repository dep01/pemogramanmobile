import {store} from 'react-easy-state';
import {icon} from '../../utils/constants';
export const state = store({
  type: 'trapesium',
  icon: null,
  allType: [
    {
      name: 'trapesium',
      icon: icon.ic_trapesium,
    },
    {
      name: 'segitiga',
      icon: icon.ic_segitiga,
    },
    {
      name: 'jajar genjang',
      icon: icon.ic_jajar,
    },
    {
      name: 'lingkaran',
      icon: icon.ic_lingkaran,
    },
    {
      name: 'layang-layang',
      icon: icon.ic_layang,
    },
    {
      name: 'balok',
      icon: icon.ic_balok,
    },
    {
      name: 'kubus',
      icon: icon.ic_kubus,
    },
    {
      name: 'krucut',
      icon: icon.ic_krucut,
    },
    {
      name: 'tabung',
      icon: icon.ic_tabung,
    },
    {
      name: 'bola',
      icon: icon.ic_bola,
    },
  ],
});

export const calculate = ({navigation}) => {
  //   switch (state.type) {
  //     case 'trapesium':
  //       break;
  //   }
  console.log(state.type);
  navigation.navigate('/count', {type: state.type, icon: state.icon});
};
