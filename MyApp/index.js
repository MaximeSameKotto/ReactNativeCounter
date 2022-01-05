/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import rootStore  from './redux/store/store'
import React from 'react';

class ReduxApp extends React.Component {
  render () {
    return (
      <Provider store={rootStore}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => ReduxApp);
