/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

class Login extends React.Component {
    static get options() {
        return {
          topBar: {
              visible:false,
          }
        };
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId !== 'sideMenu') {
          return;
        }
    
        // Use the assigned id here
        Navigation.mergeOptions('SideMenu', {
          sideMenu: {
            left: {
              visible: true
            }
          }
        });
    }

    componentDidMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }

    componentWillUnmount() {
        // Not mandatory
        console.log('Unmount')
        // if (this.navigationEventListener) {
        //   this.navigationEventListener.remove();
        // }
    }

    componentDidAppear() {
        console.log('appear')
    }

    componentDidDisappear() {
        console.log('disappear')
    }

    goToRegistration () {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'Registration',
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Pushed screen title'
                  }
                }
              }
            }
          });
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.goToRegistration()}>
                    <Text style={{ margin: 60 }}>Hello, Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default Login;
