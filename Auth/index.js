import { AppRegistry } from 'react-native';
import App from './scr/App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('secure', () => App);
