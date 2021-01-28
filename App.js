import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes';
import {view} from 'react-easy-state';
import * as store from './src/utils/global_state';
// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <Routes />
//     </SafeAreaProvider>
//   );
// };

export default view(() => {
  store.globalState.username = 'diaz erlangga';
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
});
