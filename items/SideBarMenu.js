import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    Modal,
    Switch,
    SafeAreaView, 
    ImageBackground, 
    ScrollView, 
    TouchableOpacity, 
    TextInputComponent, 
    Button,
    TextInput,
    ActivityIndicator,
    SegmentedControlIOS,
    DrawerLayoutAndroid,
    Image, 
    AppRegistry, 
    Dimensions
} from 'react-native';

// import dependencies
import styled from 'styled-components/native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import colors
const colors = require('../variables'); 

// import Icon's family 
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

// create Icons
const pencil = <MCI name="pencil-outline" color={colors.ActiveColor} size={16} />;

export default function SideBarMenu() {
    const navigation = useNavigation();
    return (
        <Box>
            <MenuHeader>
                <UserPoints>
                    455 баллов
                </UserPoints>
                <ImageBorder>
                    <ImageBox>
                        <UserImage source={require('../assets/images/UserImage.png')} resizeMode='contain' />
                    </ImageBox>
                </ImageBorder>
                <MenuFlexBox>
                    <HeaderText>Заполнен на 45% процентов</HeaderText>
                    <TouchableOpacity onPress={() => navigation.navigate('Sittings')}><CorrectAccount>{pencil}</CorrectAccount></TouchableOpacity>
                </MenuFlexBox>
                <Headline>Мария Гарапова</Headline>
            </MenuHeader>
            <MenuContent>
                <Nav>
                    <NavItem active><ItemText>Мои данные</ItemText></NavItem>
                    <NavItem><ItemText>Мои адреса</ItemText></NavItem>
                    <NavItem><ItemText>Позвоните нам</ItemText></NavItem>
                    <NavItem><ItemText>Позвонить Вам?</ItemText></NavItem>
                    <NavItem><ItemText>Центр поддержки</ItemText></NavItem>
                    <NavItem><ItemText>Правила пользования</ItemText></NavItem>
                </Nav>
                <View>
                    <SomeTextTitle>МОИ ПРОМО</SomeTextTitle>
                    <MenuText>235 677477 00</MenuText>
                    <MenuText>633773737 00</MenuText>
                    <MenuText>655 11222 000</MenuText>
                    <MenuText>WINTER 2111</MenuText>
                </View>
                <About><AboutText>О программе</AboutText></About>
                <CloseMenuBtn onPress={() => drawer.current.closeDrawer()} >
                    <TextBtn>Выход</TextBtn>
                </CloseMenuBtn>
            </MenuContent>
        </Box>
    );
}

const AboutText = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor};
    padding: 0 7px;
    margin: 55px 0 0;
`;

const About = styled.TouchableOpacity``;

const MenuText = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor};
    padding: 0 7px;
`;

const SomeTextTitle = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor};
    line-height: 16px;
    margin: 40px 0 9px;
    padding: 0 7px;
`;

const ItemText = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor}; 
`;

const NavItem = styled.TouchableOpacity`
    border-bottom-width: ${props => props.active ? '3px' : '0px'};
    border-bottom-color: ${colors.ActiveColor};
    padding: 5px 7px;
    margin-top: 17px;
`;

const Nav = styled.View``;

const MenuContent = styled.View`
    padding: 28px 30px 48px 25px;
`;

const Headline = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${colors.ActiveColor};
    margin-top: 12px;
`;

const CorrectAccount = styled.Text`
    margin-left: 8px;
`;

const HeaderText = styled.Text`
    color: ${colors.TextColor};
    font-size: 9px;
    margin-top: 4px;
`;

const UserImage = styled.Image`
    width: 100%;
`;
const MenuFlexBox = styled.View`
    flex-direction: row;
`;

const ImageBox = styled.View`
    border-radius: 150px;
    width: 71px;
    height: 71px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin: 10px 0 4px; 
`;

const ImageBorder = styled.View`
`;

const UserPoints = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.ActiveColor};
`;

const MenuHeader = styled.View`
    background: #fff;
    align-items: center;
    justify-content: center;
    padding: 30px 24px; 
`;

const TextBtn = styled.Text`
    color: ${colors.TextButtonColor};
    font-weight: bold;
    font-size: 12px;
`;

const CloseMenuBtn = styled.TouchableOpacity`
    border-radius: 30px;
    background: #0CA4FA;
    align-items: center;
    padding: 13px 0;
    margin-top: 31.28px;
`;

const Box = styled.ScrollView`
    background: #EEEEEE;
`;