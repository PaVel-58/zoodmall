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

// import items
import { CardsView } from '../items/index';

// import dependencies
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import styled from 'styled-components/native';
// import { RadioButton } from 'react-native-paper';

// colors
const colors = require('../variables');

export default function CartScreen(props) {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Wrapper>
            <ScrollBar>
                <CartDocs>
                    <DocsIcon></DocsIcon>
                    <DocsText>Cвайпни, чтоб удалить из корзины</DocsText>
                </CartDocs>
                <CardsView
                    typeNetwork = 'byOne'
                    id = '1'
                    image = "../../assets/images/Card.png"
                    name = 'Ботинки из эко-кожи'
                    discription = 'Описание ботинок, составк, производитель и правила ухода за ними Описание ботинок, состав, производитель и правила ухода за ними Описание ботино'
                    categories = 'Ботинки'
                    price = '400 000'
                    sale = '480 000'
                    favorite = {true}
                    colors = {['#121212', '#C4C4C4', '#A80000', '#020778']}
                    sizeData = {[
                        {   
                            active: false,
                            have: false,
                            size: 29
                        },
                        {   
                            active: false,
                            have: true,
                            size: 35
                        },
                        {   
                            active: false,
                            have: true,
                            size: 27
                        },
                        {   
                            active: false,
                            have: true,
                            size: 45
                        },
                        {   
                            active: false,
                            have: true,
                            size: 33
                        },
                    ]}
                />
                <Footer>
                    <Delivery>
                        <View>
                            <DeliveryTitle>Доставка</DeliveryTitle>
                            {/* <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                            /> */}
                        </View>
                    </Delivery>
                    <PromoCode>
                        <PromoCodeTitle>*Введите промокод</PromoCodeTitle>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                            <Input
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="********"
                            />
                            )}
                            name="firstName"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                    </PromoCode>
                    <Outcome>Итого: 3 881 231 UZS</Outcome>
                </Footer>
                <Checkout><CheckoutText>Оформить заказ</CheckoutText></Checkout>
            </ScrollBar>
        </Wrapper>
    );
}

const CheckoutText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    color: ${colors.TextButtonColor};
`;

const Checkout = styled.TouchableOpacity`
    border-radius: 30px;
    background: ${colors.ActiveColor};
    padding: 21px 0;
    margin: 12px 0;
`;

const Outcome = styled.Text`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${colors.ActiveColor};
`;

const Input = styled.TextInput`
    font-size: 14px; 
    padding: 16px 12px;
    background: ${colors.CardBackground};
`;

const PromoCodeTitle = styled.Text`
    font-size: 14px;
    color: ${colors.PassiveTextColor};
    margin-bottom: 4px;
`;

const PromoCode = styled.View`
    margin: 37px 0 19px;
`;

const DeliveryTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.TitleColor};
`;

const Delivery = styled.View`
    margin-top: 71px;
`;

const Footer = styled.View``;

const DocsIcon = styled.View``;

const DocsText = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor}
`;

const CartDocs = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
`;

const ScrollBar = styled.ScrollView`
    padding: 0 20px;
`;

const Wrapper = styled.View``;

// Stylesheet
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});