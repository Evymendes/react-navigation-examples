import React from 'react';
import { View, Text } from 'react-native';

// Router
import MainStack from './router';

class MainApp extends React.Component {
    state = {};

    render() {
			return (
				<MainStack />
			)
    }
}

export default MainApp;