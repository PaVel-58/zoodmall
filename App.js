import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

// import screens, 
import { 
    EnterScreen, 
    AppNavigation,
    CartScreen,
    ProductScreen,
    BuyOneClick,
    SettingsScreen,
    SideBar
} from './screens/index'

// import dependencies
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Enter">
                <Stack.Screen name="App" component={AppNavigation} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Enter" component={EnterScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Cart" component={CartScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Product" component={ProductScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="BuyOneClick" component={BuyOneClick} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Sittings" component={SettingsScreen} options = {{ title: 'Настройки' }}/>
                <Stack.Screen name="SideBar" component={SideBar} options = {{ title: '', headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}