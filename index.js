import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true;

// window.LOG_LEVEL = 'DEBUG';

AppRegistry.registerComponent(appName, () => App);
