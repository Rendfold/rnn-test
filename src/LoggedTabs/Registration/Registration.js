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

class Registration extends React.Component {
    // static get options() {
    //     return {
    //       topBar: {
    //         // Configure your button style here
    //         leftButtons: [
    //           {
    //             id: 'sideMenu',
    //             text: 'x',
    //             fontSize: 28,
    //             color: 'red'
    //           }
    //         ]
    //       }
    //     };
    // }

    // navigationButtonPressed({ buttonId }) {
    //     if (buttonId !== 'sideMenu') {
    //       return;
    //     }
    
    //     // Use the assigned id here
    //     Navigation.mergeOptions('SideMenu', {
    //       sideMenu: {
    //         left: {
    //           visible: true
    //         }
    //       }
    //     });
    // }

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

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => goToAuth()}>
                    <Text style={{ margin: 60 }}>Hello, Registration</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default Registration;
