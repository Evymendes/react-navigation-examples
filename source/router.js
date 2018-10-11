// Libs
import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator,
	createDrawerNavigator
} from 'react-navigation';

// Images
import tabs from './assets/tabs.png';

// Screens
import MainScreen from './screens/mainScreen';
import NavigatorScreens from './screens/navigatorScreens';
import YellowScreen from './screens/yellowScreen';
import RedScreen from './screens/redScreen';
import BlueScreen from './screens/blueScreen';

const MainNavigator = createStackNavigator({
	Navigators: {
		screen: NavigatorScreens
	},
}, {
	initialRouteName: 'Navigators',
	headerMode: 'none',
});

const TabNavigator = createBottomTabNavigator({
	Yellow: {
		screen: YellowScreen
	},
	Red: {
		screen: RedScreen
	},
	Blue: {
		screen: BlueScreen
	}
}, {
	initialRouteName: 'Yellow',
	headerMode: 'none',
	navigationOptions: {
		tabBarIcon: () => {
			return <Image source={tabs} style={{width: 25, height: 25}} />
		}
	}
});

const DrawerNavigator = createDrawerNavigator({
  Main: {
    screen:  MainScreen,
    navigationOptions: {
      header: null
    }
	},
	Yellow: {
		screen: YellowScreen
	},
	Red: {
		screen: RedScreen
	},
	Blue: {
		screen: BlueScreen
	}
}, {
  drawerPosition: 'left',
  initialRouteName: 'Main',
});

const MainStack = createSwitchNavigator({
  Initial: MainNavigator,
	Tabs: TabNavigator,
	Drawer: DrawerNavigator

}, {
  initialRouteName: 'Initial',
  }
);

export default MainStack;