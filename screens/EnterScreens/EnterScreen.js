import React from 'react';
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
import { LogIn, SignIn } from '../index'

// import dependencies
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from "expo-constants";

import styled from 'styled-components/native';

// colors
const colors = require('../../variables');

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <Header>
            <HeaderBg source={require('../../assets/images/EnterHeader.png')} resizeMode='cover'>
                <HeaderTitle>
                    <TitleText>
                        Зарегистрируйся и получи 15.000 UZS на первую покупку!
                    </TitleText>
                </HeaderTitle>
                <EnterButtons>
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

                        return (
                            <TabBtn
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}    
                            >
                                <TextTubBtn active={isFocused}>{label}</TextTubBtn>
                            </TabBtn>   
                        );
                    })}
                </EnterButtons>
            </HeaderBg>
        </Header>
    );
}

export default function EnterScreen() {
    return (
        <Wrapper style={styles.container}>
            <ScrollView>
                <Tab.Navigator tabBar={props => <MyTabBar {...props}/>} initialRouteName="LogIn"> 
                    <Tab.Screen name="SignIn" component={SignIn} options = {{ title: 'Зарегистрироваться' }} />
                    <Tab.Screen name="LogIn" component={LogIn} options = {{ title: 'Войти' }}/>
                </Tab.Navigator>
            </ScrollView>
        </Wrapper>
    );
}

// styled components
const TextTubBtn = styled.Text`
    color: ${props => props.active ? `${colors.ActiveColor}` : `${colors.TextButtonColor}`};
    border-bottom-width: ${props => props.active ? '3px' : '0px'};
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 14px;
    margin-right: 69px;
    border-bottom-color: ${colors.ActiveColor};
`;

const TabBtn = styled.TouchableOpacity``;

const EnterButtons = styled.View`
    flex-direction: row;
    width: 279px;
`;

const TitleText = styled.Text`
    color: ${colors.MainTitleColor};
    font-weight: bold;
    font-size: 20px;
`;

const HeaderTitle = styled.View`
    width: 249px;
    justify-content: center;
    height: 250px;
`;

const HeaderBg = styled.ImageBackground`
    align-items: center;
    padding-bottom: 27px;
`;

const Header = styled.View`
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
`;

const Wrapper = styled.View``;

// Stylesheet
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight 
    },
});