import React from 'react';
import { View, Text, TouchableOpacity, CheckBox } from 'react-native';

class MainScreen extends React.Component {
    state = {
			screens: ['Yellow', 'Red', 'Blue'],
			checked: false,
		};

		handleChange = (ev) => {
			this.setState({ checked: !this.state.checked })
		}

		renderButtons = () => {
			return this.state.screens.map((screen) => {

				const handlePress = () => {
					this.props.navigation.navigate(screen);
				};

				return (
					<TouchableOpacity
						style={styles.button}
						onPress={handlePress}
					>
						<Text>
							{screen}
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
				 <CheckBox
				 	value={this.state.checked}
				 	onValueChange={this.handleChange} />
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

export default MainScreen;