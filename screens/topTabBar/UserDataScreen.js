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
import { useNavigation } from '@react-navigation/native';

// // colors
const colors = require('../../variables');

// // import items
import { NotificationsCard } from '../../items/index';

// // import Icon's family 
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

// // Icons
const pencil = <MCI name="pencil-outline" color={colors.ActiveColor} size={16} />

export default function UserDataScreen() {
    const navigation = useNavigation();
    return (
        <Wrapper>
            <Header>
                <HeaderBg />
                <HeaderContent>
                    <ImageBorder>
                        <ImageBox>
                            <UserImage source={require('../../assets/images/UserImage.png')} resizeMode='contain' />
                        </ImageBox>
                    </ImageBorder>
                    <FlexBox>
                        <HeaderText>Заполнен на 45% процентов</HeaderText>
                        <TouchableOpacity onPress={() => navigation.navigate('Sittings')}><CorrectAccount>{pencil}</CorrectAccount></TouchableOpacity>
                    </FlexBox>
                    <Headline>Мария Гарапова</Headline>
                    <Headline>455 баллов</Headline>
                    <PointsBtn><PointsBtnText>Пополнить</PointsBtnText></PointsBtn>
                </HeaderContent>
            </Header>
            <HorizontalView horizontal={true}>
                <TouchableOpacity><InformationItem active>Уведомления</InformationItem></TouchableOpacity>
                <TouchableOpacity><InformationItem>Баланс</InformationItem></TouchableOpacity>
                <TouchableOpacity><InformationItem>Промокоды</InformationItem></TouchableOpacity>
                <TouchableOpacity><InformationItem>Объявления</InformationItem></TouchableOpacity>
            </HorizontalView>
            <Content>
                <NotificationsCard text="Покупайте каждый день и получайте бонусы" active={true} favorite={false}/>
                <NotificationsCard text="Вы приобрели хит недели “Черные ботинки” и получаете промокод на покупку средства для ухода за искуственной кожей Гель Бигель" active={false} favorite={true}/>
                <NotificationsCard text="Вы приобрели хит недели “Черные ботинки” и получается промокод на покупку средства для ухода за искуственной кожей" active={false} favorite={false}/>
                <NotificationsCard text="Вы приобрели хит недели “Черные ботинки” и получается промокод на покупку средства для ухода за искуственной кожей" active={false} favorite={false}/>
                <NotificationsCard text="Вы приобрели хит недели “Черные ботинки” и получается промокод на покупку средства для ухода за искуственной кожей" active={false} favorite={true}/>
                <NotificationsCard text="Вы приобрели хит недели “Черные ботинки” и получается промокод на покупку средства для ухода за искуственной кожей" active={false} favorite={false}/>
                <NotificationsCard text="Вы приобрели хит недели “Черные ботинки” и получается промокод на покупку средства для ухода за искуственной кожей" active={false} favorite={true}/>
            </Content>
        </Wrapper>
    );
}


const Content = styled.View`
    padding: 0px 18px 20px;
`;

const InformationItem = styled.Text`
    border-bottom-width: ${props => props.active ? '3px' : '0px'};
    color: ${props => props.active ? `${colors.TextColor}` : `${colors.PassiveTextColor}`};
    border-bottom-color: ${colors.ActiveColor};
    font-size: 15px;
    padding: 12px 15px;
`;

const HorizontalView = styled.ScrollView`
    padding: 10px 0 4px;
    margin: 15px 0 25px 31px;
`;

const PointsBtnText = styled.Text`
    color: ${colors.TextButtonColor};
    font-size: 14px;
    font-weight: bold;
`;

const PointsBtn = styled.TouchableOpacity`
    border-radius: 30px;
    background: ${colors.ActiveColor}
    padding: 9px 24px;
    margin-top: 10px;
`;

const Headline = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${colors.ActiveColor};
    line-height: 35px;
`;

const CorrectAccount = styled.Text`
    margin-left: 8px;
`;

const HeaderText = styled.Text`
    color: ${colors.TextColor};
    font-size: 13px;
    margin-top: 9px;
`;

const FlexBox = styled.View`
    flex-direction: row;
`;

const UserImage = styled.Image``;

const ImageBox = styled.View`
    border-radius: 150px;
    width: 126px;
    height: 126px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

const ImageBorder = styled.View`
`;

const HeaderContent = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: -100px;
`;

const HeaderBg = styled.View`
    background: #fff;
    height: 111px;
    width: 100%;
`;

const Header = styled.View``;

const Wrapper = styled.ScrollView``;