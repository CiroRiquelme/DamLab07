/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import DamApp from './DamApp';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import MyApp from './MyApp';
import Rubros from './rubros/Rubros';

AppRegistry.registerComponent(appName, () => Rubros);
