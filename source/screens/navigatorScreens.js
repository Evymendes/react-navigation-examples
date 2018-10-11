import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class NavigatorScreens extends React.Component {
    state = {
			navigators: ['Drawer', 'Tabs']
		};

		renderButtons = () => {
			return this.state.navigators.map((navigator) => {

				const handlePress = () => {
					this.props.navigation.navigate(navigator);
				};

				return (
					<TouchableOpacity
						style={styles.button}
						onPress={handlePress}
					>
						<Text>
							{navigator}
						</Text>
					</TouchableOpacity>
				)
			});
		}

    render() {
			return (
				<View
					style={styles.container}
				>
				 {this.renderButtons()}
				</View>
			)
    }
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		height: 60,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: 'deepskyblue'
	}
}

export default NavigatorScreens;