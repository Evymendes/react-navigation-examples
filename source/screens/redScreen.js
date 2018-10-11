import React from 'react';
import { View, Text } from 'react-native';

class RedScreen extends React.Component {
    state = {};

    render() {
			return (
				<View
					style={styles.container}
				>
					<Text
						style={styles.title}
					>
						Red
					</Text>
				</View>
			)
    }
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red'
	},
	title: {
		color: '#fff',
		fontSize: 26,
		fontWeight: '700'
	}
}

export default RedScreen;