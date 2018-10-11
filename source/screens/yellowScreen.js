import React from 'react';
import { View, Text } from 'react-native';

class YellowScreen extends React.Component {
    state = {};

    render() {
			return (
				<View
					style={styles.container}
				>
					<Text
						style={styles.title}
					>
						Yellow
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
		backgroundColor: 'yellow'
	},
	title: {
		color: '#fff',
		fontSize: 26,
		fontWeight: '700'
	}
}

export default YellowScreen;