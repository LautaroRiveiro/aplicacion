import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreditsScreen from './screens/CreditsScreen';
import Drawer from './components/Drawer';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    },
);

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
}, {
    headerMode: 'none',
});

const DrawerNavigator = createDrawerNavigator({
    Main: AppStack,
    CreditsStack: createStackNavigator({
        Credits: CreditsScreen,
    }),
}, {
    contentComponent: ({navigation}) => (<Drawer navigation={navigation}/>),
});

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: DrawerNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        },
    ),
);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
