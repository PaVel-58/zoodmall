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
    SegmentedControlIOS,
    Image, 
    AppRegistry, 
    Dimensions
} from 'react-native';

// import dependencies
import Constants from "expo-constants";
import styled from 'styled-components/native';
import { useForm, Controller } from "react-hook-form";

// import Icon's family 
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

// colors
const colors = require('../../variables');

// Icons
const pencil = <MCI name="pencil-outline" color={colors.ActiveColor} size={10} />

export default function SettingsScreen() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Wrapper>
            <Padding/>
            <EditView>
                {pencil}
                <EditText>Редактировать</EditText>
            </EditView>
            <MainCard>
                <UserImage><UserImageText>Загрузить фото</UserImageText></UserImage>
                <UserData>
                    <UserText>12 заказов 6 отзывов</UserText>
                    <UserName>Мария Гарапова</UserName>
                    <UserNumder>
                        <NumberLabel>*Подтвержден</NumberLabel>
                        <Number>+99891 658 26 18</Number>
                    </UserNumder>
                </UserData>
            </MainCard>

            <EditView>
                {pencil}
                <EditText>Редактировать</EditText>
            </EditView>
            <InputView>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="Имя Фамилия"
                    />
                    )}
                    name="Name"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <InputLabel>*</InputLabel>
            </InputView>

            <EditView>
                {pencil}
                <EditText>Редактировать</EditText>
            </EditView>            
            <InputView>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="Адрес доставки"
                    />
                    )}
                    name="address"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <InputLabel>*</InputLabel>
            </InputView>
            
            <EditView>
                {pencil}
                <EditText>Редактировать</EditText>
            </EditView>
            <InputView>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="Номер телефона"
                    />
                    )}
                    name="phoneNumber"
                    rules={{ required: true }}
                    defaultValue=""
                />
                <InputLabel>*</InputLabel>
            </InputView>
            
            {errors.firstName && <Text>This is required.</Text>}
            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
            <Padding/>
        </Wrapper>
    );
}

const EditText = styled.Text`
    color: ${colors.ActiveColor}
    font-size: 10px;
    margin-left: 3px;
`;

const EditView = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 3px 20px;
`;

const InputLabel = styled.Text`
    color: red;
    position: absolute;
    top: 10px;
    right: 20px;
`;

const Input = styled.TextInput`
    background: ${colors.CardBackground};
    border-radius: 30px;
    padding: 21px 30px;
    margin: 5px 0;
    width: 100%;
`;

const InputView = styled.View`
    flex-direction: row;
    position: relative;
`;

const Number = styled.Text`
    font-size: 13px;
    color: #373232;
    text-align: right;
    font-weight: bold;
`;

const NumberLabel = styled.Text`
    font-size: 9px;
    color: ${colors.ActiveColor};
    text-align: right;
`;

const UserNumder = styled.View`
    margin-top: 4px; 
`;

const UserName = styled.Text`
    font-size: 13px;
    color: #373232;
    text-align: right;
`;

const UserText = styled.Text`
    font-size: 9px;
    color: ${colors.TextColor};
    text-align: right;
`;

const UserData = styled.View``;

const UserImageText = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor};
    text-align: center;
`;

const UserImage = styled.TouchableOpacity`
    width: 132px;
    height: 123px;
    background: #FCF2F2;
    justify-content: center;
    align-items: center;
`;

const MainCard = styled.View`
    background: ${colors.CardBackground};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    padding: 37px 37px 37px 22px;
    margin: 5px 0;
`;

const Padding= styled.View`
    height: 16px;
`;

const Wrapper = styled.ScrollView`
    padding: 0 20px 0px;
`;