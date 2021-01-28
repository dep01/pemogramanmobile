import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  inputBox: {
    width: '80%',
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
    marginTop: 20,
    backgroundColor: '#009AFF',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
  },
  text: {color: '#ffffff', fontSize: 18, fontWeight: 'bold'},
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15,
  },
});
