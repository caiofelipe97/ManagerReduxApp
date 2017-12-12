import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
  }
}



export default App;