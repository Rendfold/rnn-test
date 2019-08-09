import { Navigation } from 'react-native-navigation';
import Login from './Login/Login';
import Registration from './Registration/Registration';

export default function registerScreens() {
    Navigation.registerComponent('LogIn', () => Login);
    Navigation.registerComponent('Registration', () => Registration);
}