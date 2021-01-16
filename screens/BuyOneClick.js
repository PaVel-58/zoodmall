import React, { useState } from 'react';
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
    Image, 
    AppRegistry, 
    Dimensions
} from 'react-native';

// import items
import { BigCard, LongCard, SmallCard } from '../items/index';

// import dependencies
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Slider from '@react-native-community/slider';
// import RangeSlider from 'react-native-range-slider';
// import ViewPager from '@react-native-community/viewpager';

// import Icon's family 
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

// colors
const colors = require('../variables');

// Icons
const   CartIcon        = <Feather                      name="shopping-cart"    color={colors.PassiveColor}         size={24}/>;

// Icons end-------------------------------------------------------------------------------

export default function BuyOneClickScreen(props) {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Wrapper>
            <ScrollView>
                <Container>
                    <Title>Доставка</Title>
                    <Label>*Адресс доставки</Label>
                    <FormView>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                            <Input
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="ФИО"
                            />
                            )}
                            name="firstName"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {errors.firstName && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                            <Input
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Адресс доставки"
                            />
                            )}
                            name="lastName"
                            defaultValue=""
                        />
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="+7 (___) ___  ___  ___"
                            />
                            )}
                            name="lastName"
                            defaultValue=""
                        />
                    </FormView>

                    <Title>Доставка</Title>
                    <FormView>
                        
                    </FormView>
                    <FormView>
                        
                    </FormView>
                    <FormText>Итого: 400 000 UZS</FormText>
                    <FormBtn onPress={handleSubmit(onSubmit)}><FormBtnTitle>Купить в один клик</FormBtnTitle></FormBtn>
                </Container>
            </ScrollView>
        </Wrapper>
    );
}

const FormBtnTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${colors.TextButtonColor};
`;

const FormBtn = styled.TouchableOpacity`
    background: ${colors.ActiveColor};
    border-radius: 30px;
    padding: 27px 0;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`;

const FormText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.TitleColor};
    margin-top: 30px;
    text-align: center;
`;

const Input = styled.TextInput`
    border-bottom-width: 1px;
    border-color: ${colors.PassiveIconColor};
    padding: 8px 0;
    margin-bottom: 15px;
`;

const FormView = styled.View`
    background: ${colors.CardBackground};
    border-radius: 30px;
    padding: 28px;
    margin-top: 14px; 
`;

const Label = styled.Text`
    font-size: 12px;
    color: ${colors.PassiveTextColor};
    margin-top: 14px;
`;

const Title = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.ActiveColor};
    margin-top: 24px;
`;

const Container = styled.View`
    padding: 50px;
`;

const Wrapper = styled.View`
`;

// Stylesheet
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});