import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    ScrollView
} from 'react-native';

// import dependencies
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

import styled from 'styled-components/native';

// colors
const colors = require('../../variables');

export default function SignIn() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const navigation = useNavigation();
    return (
        <View>
            <CenterBlock>
                <FormBlock>
                    <DiscriptText>Имя</DiscriptText>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                        <InputStyle
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="Петр"
                        />
                        )}
                        name="FirstName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <DiscriptText>Фамилия</DiscriptText>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                        <InputStyle
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="Петренко"
                        />
                        )}
                        name="LastName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <DiscriptText>Телефон</DiscriptText>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                        <InputStyle
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="+998 99 981 85 65"
                        />
                        )}
                        name="Phone"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <DiscriptText><RedText>*</RedText>Почтовый адрес</DiscriptText>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                        <InputStyle
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="test123@test.com"
                        />
                        )}
                        name="Email"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <DiscriptText><RedText>*</RedText>Пароль</DiscriptText>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                        <InputStyle
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="*********"
                        />
                        )}
                        name="Password"
                        defaultValue=""
                    />
                    <LinkBtn><LinkText>Забыли пароль?</LinkText></LinkBtn>
                    <LoaderLine>
                        <ActivityIndicator size="large" color={colors.ActiveColor} />
                    </LoaderLine>
                    <FormBtn onPress={() => {handleSubmit(onSubmit); navigation.navigate('SideBar');}} ><TextBtn>Зарегистрироваться</TextBtn></FormBtn>
                </FormBlock>
            </CenterBlock>
        </View>
    );
}

// styled components
const TextBtn = styled.Text`
    color: ${colors.TextButtonColor};
    font-weight: bold;
    font-size: 17px;
`;

const FormBtn = styled.TouchableOpacity`
    width: 314px;
    border-radius: 30px;
    background: #0CA4FA;
    align-items: center;
    padding: 21px 0;
    margin-top: 31.28px;
`;

const LoaderLine = styled.View`
    margin-top: 70px;
`;

const LinkText = styled.Text`
    color: ${colors.ActiveColor};
    font-weight: bold;
    font-size: 14px;
    text-align: left;
`;

const LinkBtn = styled.TouchableOpacity`
    width: 100%;
    margin-top: 10px;
`;

const RedText = styled.Text`
    color: #FF0000;
`;

const DiscriptText = styled.Text`
    color: #C5C5C5;
    text-align: left;
    width: 100%;
    margin: 30px 0 9px;
`;

const InputStyle = styled.TextInput`
    padding: 14px 0 18px 12px;
    background: #F6F6F6;
    border-radius: 2px;
    width: 100%;
`;

const FormBlock = styled.View`
    align-items: center;
    width: 299px;
    padding-bottom: 63px;
`;

const CenterBlock = styled.View `
    align-items: center;
`;