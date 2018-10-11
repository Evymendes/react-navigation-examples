import React from 'react';
import { View, Text } from 'react-native';

class BlueScreen extends React.Component {
    state = {};

    render() {
			return (
				<View
					style={styles.container}
				>
					<Text
						style={styles.title}
					>
						Blue
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
		backgroundColor: 'blue'
	},
	title: {
		color: '#fff',
		fontSize: 26,
		fontWeight: '700'
	}
}

export default BlueScreen;