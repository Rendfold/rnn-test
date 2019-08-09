import { Navigation } from 'react-native-navigation';
import App from './App';
import SignIn from './SignIn'
import SideMenu from './SideMenu';
import LoginTabsScreens from './src/LoggedTabs';

export function registerScreens() {
    LoginTabsScreens()
    Navigation.registerComponent('App', () => App);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('SideMenu', () => SideMenu);
    //   Navigation.registerComponent('SignIn', () => require('./SignIn').default);
    //   Navigation.registerComponent('SignUp', () => require('./SignUp').default);
    //   Navigation.registerComponent('Screen2', () => require('./Screen2').default);
}