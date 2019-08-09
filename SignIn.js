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

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    sideMenu: {
                        left: {
                            component: {
                              id: "SideMenu",
                              name: "SideMenu"
                            }
                        },
                        center: {
                            stack: {
                                options: {},
                                children: [{
                                    component: {
                                        name: 'LogIn',
                                        options: {
                                            bottomTab: {
                                                fontSize: 12,
                                                text: 'Sign In'
                                            }
                                        }
                                    }
                                }]
                            }
                        },

                        id: 'sideMenu',
                    },
                },
                {
                    component: {
                        name: 'App',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12
                            }
                        }
                    },
                },
            ],
        },
    }
});

class App extends React.Component {
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
            <TouchableOpacity onPress={() => goToAuth()}>
                <Text style={{ margin: 60 }}>Hello, Sign In</Text>
            </TouchableOpacity>
        )
    }
};

export default App;
