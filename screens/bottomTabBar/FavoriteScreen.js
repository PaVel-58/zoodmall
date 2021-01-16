import React, { useRef } from 'react';
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

// import items
import { CardsView, SideBarMenu } from '../../items/index';

// import dependencies
import Constants from "expo-constants";
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

// import Icon's family 
import Feather from 'react-native-vector-icons/Feather';

// colors
const colors = require('../../variables');

// Icons
const   MenuIcon        = <Feather                      name="menu"             color="#000"                        size={22}/>,
        CartIcon        = <Feather                      name="shopping-cart"    color={colors.PassiveColor}         size={24}/>;

let quantity = 10;

export default function FavoritesScreen() {
    // SideBar begin 
        const drawer = useRef(null);

        const navigationView = () => (
            <SideBarMenu/>
        );
    // SideBar end
    const navigation = useNavigation();
    return (
        // <DrawerLayoutAndroid
        //     ref={drawer}
        //     drawerWidth={189}
        //     drawerPosition='left'
        //     renderNavigationView={navigationView}
        // >
            <Wrapper style={styles.container}>
                <ScrollView>
                    <Header>
                        <Topbar>
                            <BurgerMenu
                                // onPress={() => drawer.current.openDrawer()}
                                onPress={() => navigation.toggleDrawer()}
                            >
                                {MenuIcon}
                            </BurgerMenu>
                            <LeftView>
                                <Price>20140 р.</Price>
                                <Cart
                                    onPress={() => navigation.navigate('Cart')}
                                >
                                    {CartIcon}
                                </Cart>
                            </LeftView>
                        </Topbar>
                    </Header>
                    <ContentSection>
                        <QuantityProduct>Всего {quantity} товара</QuantityProduct>
                        <CardsView
                            // dataProduct={api}
                            typeNetwork = 'byThree'
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
                    </ContentSection>
                </ScrollView>
            </Wrapper>
        // </DrawerLayoutAndroid>
    );
}




const Products = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 0 13px;
`;

const QuantityProduct = styled.Text`
    color: ${colors.TextColor};
    font-size: 14px;
    text-align: center;
`;

const ContentSection = styled.View``;

const Cart = styled.TouchableOpacity``;

const Price = styled.Text`
    color: ${colors.PassiveColor};
    font-size: 13px;
    margin-right: 5px;
`;

const LeftView = styled.View`
    flex.direction: row;
    justify-content: space-between;
`;

const BurgerMenu = styled.TouchableOpacity``;

const Topbar = styled.View`
    flex.direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.View`
    padding: 40px 40px 25px;
`;

const Wrapper = styled.View`
`;

// Stylesheet
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});