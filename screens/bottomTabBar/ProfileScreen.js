import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ImageBackground, 
    ScrollView, 
    TouchableOpacity, 
    TextInputComponent, 
    Button,
    Alert,
    TextInput,
    ActivityIndicator,
    SegmentedControlIOS
} from 'react-native';

// import screens
import { SettingsScreen, EnterScreen, UserDataScreen } from '../index';

// import dependencies
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from "expo-constants";
import Icon from 'react-native-vector-icons/Entypo';

import styled from 'styled-components/native';


// colors
const colors = require('../../variables');

function MyTabBar({ state, descriptors, navigation }) {
    const [exit, setPress] = useState(false);
    return (
        <ProfileHeader>
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
                            <TabText 
                                style={{ 
                                    color: isFocused ? `${colors.ActiveColor}` : `${colors.TextColor}`, 
                                    fontWeight: isFocused ? 'bold' : '400' 
                                }}
                            >{label}</TabText>
                        </TabBtn>
                    );
                })}
            </TabBarView>
            <ExitBtn
                active={exit}
                onPress={() => {
                    setPress(true);
                    navigation.navigate('Enter');
                }}
            >
                <ExitBtnText>Выйти</ExitBtnText>
            </ExitBtn>
        </ProfileHeader>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function ProfileScreen() {

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props}/>} initialRouteName="UserScreen"> 
        <Tab.Screen name="Se   ttings" component={SettingsScreen} options = {{ title: 'Настройки' }}/>
        <Tab.Screen name="UserScreen" component={UserDataScreen} options = {{ title: 'Профиль' }}/>
        {/* <Tab.Screen name="Exit" component={EnterScreen} options = {{ title: 'Выход' }} /> */}
    </Tab.Navigator>
  );
}

const ExitBtnText = styled.Text`
    color: ${colors.TextColor}; 
    font-weight: 400;
`;

const ExitBtn = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom-width: ${props => props.active ? '3px' : '0px'};
    border-bottom-color: ${colors.ActiveColor};
`;

const ProfileHeader = styled.View`
    background: #fff;
    padding: 68px 0 38px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TabText = styled.Text`
    font-size: 15px;
`;

const TabBtn = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 40px 3px 0;
`;

const TabBarView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;