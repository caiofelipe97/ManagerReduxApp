import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyAg4F8mnFEXR8dG0cRVCZoTHMKJkggTCts",
      authDomain: "manager-employees-4d0b0.firebaseapp.com",
      databaseURL: "https://manager-employees-4d0b0.firebaseio.com",
      projectId: "manager-employees-4d0b0",
      storageBucket: "",
      messagingSenderId: "701699738758"
    };
    firebase.initializeApp(config);
  };
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;