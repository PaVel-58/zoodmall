import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

// import screens, 
import { 
    HomeScreen, 
    FavoriteScreen,
    HistoryScreen,
    ProfileScreen,
    SideBarMenu
} from './index'

// import dependencies
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import colors
const colors = require('../variables');

// creat icons for tabBar begin
import Icon from 'react-native-vector-icons/Entypo';

const GetIcon = props => {
    return (
        <Icon name={props.name} color={props.color} size={30}  solid={props.focused} light={!props.focused}/>
    );
};
// creat icons for tabBar end

// custom tabs 
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <TabBarView>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                        navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBtn
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <GetIcon name={label} color={isFocused ? '#0CA4FA' : '#ADADAF'} focused={true}/>
                    </TabBtn>
                );
            })}
        </TabBarView>
    );
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        // <DrawerLayoutAndroid
        //     ref={drawer}
        //     drawerWidth={189}
        //     drawerPosition='left'
        //     renderNavigationView={SideBarMenu}
        // >
            <Tab.Navigator tabBar={props => <MyTabBar {...props} activeTintColor='#000'/>}>
                <Tab.Screen name="home" component={HomeScreen} />
                <Tab.Screen name="heart-outlined" component={FavoriteScreen}/>
                <Tab.Screen name="user" component={ProfileScreen} />
                <Tab.Screen name="back-in-time" component={HistoryScreen} />
            </Tab.Navigator>
        // </DrawerLayoutAndroid>
    );
}

const TabBtn = styled.TouchableOpacity`
    width: 25%;
    align-items: center;
`;

const TabBarView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    padding: 15px 0;
`;