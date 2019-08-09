import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

class App extends React.Component {

    render() {
        return (
            <TouchableOpacity>
                <Text style={{ margin: 60 }}>Hello, Log</Text>
            </TouchableOpacity>
        )
    }
};

export default App;
