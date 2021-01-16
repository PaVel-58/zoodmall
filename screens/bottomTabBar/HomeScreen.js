import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    Modal,
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
    Dimensions,
    FlatList
} from 'react-native';

// import items
import { 
    ColorPicker, 
    SizePicker,
    SliderImage,
    SideBarMenu,
    CardsView,
    ManufacturerPicker,
    Switch
 } from '../../items/index';

// import dependencies
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

import Constants from "expo-constants";
import styled from 'styled-components/native';

// import Icon's family 
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

// colors
const colors = require('../../variables');

let NetBtnColor = '#fff';  

// Icons
const   MenuIcon        = <Feather                      name="menu"             color="#000"                        size={22}/>,
        CartIcon        = <Feather                      name="shopping-cart"    color={colors.PassiveColor}         size={24}/>,
        SearchIcon      = <Feather                      name="search"           color="#000"                        size={24}/>,
        FilterIcon      = <Fontisto                     name="arrow-swap"       color={colors.PassiveColor}         size={10}/>,
        MoreIcon        = <MaterialIcons                name="play-arrow"       color={colors.ActiveColor}          size={17}/>,
        pencil          = <MCI                          name="pencil-outline"   color={colors.ActiveColor}          size={16} />,
        CloseBtnIcon    = <Ionicons                     name="ios-close"        color="#5E5E5E"                     size={30}/>;

export default function HomeScreen() {
    // Get Api start
    const [api, setApi] = useState([]);  
    // Get Api end

    // search begin
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const persons = res.data;
                setApi(persons);
            })
            .then(() => {
                setFilteredDataSource(api);
                setMasterDataSource(api);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
            );
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    
    const ItemView = ({item}) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        );
    };
    
    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#C8C8C8',
                }}
            />
        );
    };
    
    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };
    // search end
    
    const navigation = useNavigation();
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [modalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = (value) => {
      //To handle switch toggle
      setSwitchValue(value);
      //State changes according to switch
    };

    // create Markups begin
    const [activeNet, setActive] = useState(true);
    let NetBtnColor; 
    
    const MarkupsOne = (props)  => { 
        NetBtnColor = `${props.active ? '#D9D9D9' : '#0CA4FA'}`;
        return  <MaterialCommunityIcons 
                    name="view-array" 
                    color={ NetBtnColor }       
                    size={20}
                />
    };
    
    const MarkupsFour = (props)  => { 
        NetBtnColor = `${props.active ? '#D9D9D9' : '#0CA4FA'}`;
        return  <MaterialCommunityIcons 
                    name="view-grid" 
                    color={ NetBtnColor }       
                    size={20}
                />
    };
    
    const ChengeNet = () => {
        setActive(!activeNet);
    } 
    const ChengeNetworkFunc = () => {
        if (activeNet) {
            return ( 
                <CardsView
                    // dataProduct={api}
                    typeNetwork = 'infinity'
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
            )
        } else {
            return ( 
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
            )
        }
    }
    // create Markups end

    // SideBar begin 
    const drawer = useRef(null);

    const navigationView = () => (
        <SideBarMenu/>
    );
    // SideBar end

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
                                    // onPress={getApi()}
                                >
                                    {CartIcon}
                                </Cart>
                            </LeftView>
                        </Topbar>
                        <TouchableOpacity>
                            <PromoCode>
                                ПРОМОКОД на первую покупку WINTER
                            </PromoCode>
                        </TouchableOpacity>
                        <SearchView>
                            <SearchBtn>{SearchIcon}</SearchBtn>
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <SearchInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={(text) => searchFilterFunction(text)}
                                        value={search}
                                        placeholder="Елочная гирлянда"
                                        onChangeText={(text) => searchFilterFunction(text)}
                                    />
                                )}
                                name="Search"
                                rules={{ required: true }}
                                defaultValue=""
                            />
                        </SearchView>
                        
                        {/* <SafeAreaView style={{flex: 1}}>
                            <View style={styles.container}>
                                <FlatList
                                    data={filteredDataSource}
                                    keyExtractor={(item, index) => index.toString()}
                                    ItemSeparatorComponent={ItemSeparatorView}
                                    renderItem={ItemView}
                                />
                            </View>
                        </SafeAreaView> */}
                    </Header>
                    <СategoriesView>
                        <Markups>
                            <MarkupBtn onPress={() => {ChengeNet()}}>
                                <MarkupsFour active={ activeNet } />
                            </MarkupBtn>
                            <MarkupBtn onPress={() => {ChengeNet()}}>
                                <MarkupsOne active={ !activeNet } />
                            </MarkupBtn>
                        </Markups>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity><СategoriesItem active>Обувь</СategoriesItem></TouchableOpacity>
                            <TouchableOpacity><СategoriesItem>Для кухни</СategoriesItem></TouchableOpacity>
                            <TouchableOpacity><СategoriesItem>Канцелярские товары</СategoriesItem></TouchableOpacity>
                            <TouchableOpacity><СategoriesItem>Обувь</СategoriesItem></TouchableOpacity>
                        </ScrollView>
                    </СategoriesView>
                    <Content>
                        <Head>
                            <TitleContent>Популярные товары</TitleContent>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                }}
                            >
                                <CenteredView>
                                    <ModalScroll>
                                        <ModalView>
                                            <CloseBtn
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                }}
                                            >
                                                {CloseBtnIcon}
                                            </CloseBtn>
                                            <FilterContent>
                                                {FilterIcon}
                                                <FilterTitle>Фильтровать</FilterTitle>
                                            </FilterContent>
                                            {/* <SwitchItem active={true} onTitle="Включить" offTitle="Выключить"/> */}
                                            <Items>
                                                <FilterSwitchItem>
                                                    <SwitchName>По популярности</SwitchName>
                                                    <Switch
                                                        onValueChange={toggleSwitch}
                                                        value={switchValue}
                                                    />
                                                </FilterSwitchItem>
                                                <FilterSwitchItem>
                                                    <SwitchName>По возрастанию цены</SwitchName>
                                                    <Switch
                                                        onValueChange={toggleSwitch}
                                                        value={switchValue}
                                                    />
                                                </FilterSwitchItem>
                                                <FilterSwitchItem>
                                                    <SwitchName>По убыванию цены</SwitchName>
                                                    <Switch
                                                        onValueChange={toggleSwitch}
                                                        value={switchValue}
                                                    />
                                                </FilterSwitchItem>
                                                <FilterSwitchItem>
                                                    <SwitchName>По новинкам</SwitchName>
                                                    <Switch
                                                        onValueChange={toggleSwitch}
                                                        value={switchValue}
                                                    />
                                                </FilterSwitchItem>
                                                <FilterSwitchItem>
                                                    <SwitchName>По скидкам</SwitchName>
                                                    <Switch
                                                        onValueChange={toggleSwitch}
                                                        value={switchValue}
                                                    />
                                                </FilterSwitchItem>
                                            </Items>
                                            <PriceFilter>
                                                <FilterItem>
                                                    <FilterName>Цена</FilterName>
                                                    {/* <FilterSlider
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                        floatingLabel
                                                        renderThumb={renderThumb}
                                                        renderRail={renderRail}
                                                        renderRailSelected={renderRailSelected}
                                                        renderLabel={renderLabel}
                                                        renderNotch={renderNotch}
                                                        onValueChanged={handleValueChange}
                                                    /> */}
                                                    {/* <RangeSlider
                                                        minValue={0}
                                                        maxValue={100}
                                                        tintColor={'#da0f22'}
                                                        handleBorderWidth={1}
                                                        handleBorderColor="#454d55"
                                                        selectedMinimum={20}
                                                        selectedMaximum={40}
                                                        style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
                                                        onChange={ (data)=>{ console.log(data);} }
                                                    /> */}
                                                </FilterItem>
                                                <FilterItem>
                                                    <FilterName>от</FilterName>
                                                    <PriceInput keyboardType='numeric'/>
                                                    <FilterName>до</FilterName>
                                                    <PriceInput keyboardType='numeric'/>
                                                </FilterItem>
                                            </PriceFilter>

                                            <ProductFilterView>
                                                <ProductItemTitle>Выбор цвета</ProductItemTitle>
                                                <FilterItems style={{ flexWrap: 'wrap' }}>
                                                    <ColorPicker productColors={['#121212', '#C4C4C4', '#A80000', '#020778']}/>
                                                </FilterItems>
                                            </ProductFilterView>
                                            <ProductFilterView>
                                                <ProductItemTitle>Выбор размера</ProductItemTitle>
                                                <FilterItems style={{ flexWrap: 'wrap' }}>
                                                    <SizePicker 
                                                        SizePickerData={[
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
                                                </FilterItems>
                                            </ProductFilterView>
                                            <ProductFilterView>
                                                <FilterName>Производитель</FilterName>
                                                <ManufacturerPicker ManufacturerData={['Indenim', 'Uzfashion']}/>
                                            </ProductFilterView> 
                                            <AcceptButton>
                                                <TextBtn>Применить</TextBtn>
                                            </AcceptButton>          
                                        </ModalView>
                                    </ModalScroll>
                                </CenteredView>
                            </Modal>
                            <FilterContent
                                onPress={() => {
                                    setModalVisible(true);
                                }}
                            >
                                {FilterIcon}
                                <FilterText>Фильтровать</FilterText>
                            </FilterContent>
                        </Head>
                        <ProductsView>
                            <СategoriesAll>
                                <СategoriesAllText>Все категории</СategoriesAllText>
                                <View>{MoreIcon}</View>
                            </СategoriesAll>

                            <ChengeNetworkFunc/>

                        </ProductsView>
                    </Content>
                </ScrollView>
            </Wrapper>
        // </DrawerLayoutAndroid>
    );
}

const TextBtn = styled.Text`
    color: ${colors.TextButtonColor};
    font-weight: bold;
    font-size: 14px;
`;

const AcceptButton = styled.TouchableOpacity`
    background: ${colors.ActiveColor}
    padding: 10px 22px;
    border-radius: 20px;
    margin-top: 40px;
`;

const FilterItems = styled.View``;

const ProductItemTitle = styled.Text`
    font-size: 13px;
    color: ${colors.TitleColor};
    margin-bottom: -7px;
`;

const ProductFilterView = styled.View`
    width: 110%;
    align-items: flex-start;
    margin-top: 25px;
`;

const Network = styled.View``;

const HorizontalNetwork = styled.View``;

const PriceInput = styled.TextInput`
    background: #fff;
    width: 38%;
    margin-right: 10px;
`;

const PriceFilter = styled.View`
    width: 110%;
`;

const FilterSlider = styled.Slider`
    width: 90%;
`;

const FilterSwitchItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
`;

const SwitchName = styled.Text`
    width: 50%; 
    font-size: 13px;
    color: ${colors.TextColor};
    margin-right: 5px;
`;

const FilterName = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor};
    margin-right: 10px;
`;

const FilterItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0;
`;

const Items = styled.View`
    margin-top: 30px;
`;

const FilterTitle = styled.Text`
    font-size: 13px;
    color: ${colors.TextColor};
    margin-left: 3px;
    text-align: center;
`;

const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 20px;
`;

const ModalView = styled.View`
    position: relative;
    background: #F5F5F8;
    border-radius: 30px;
    padding: 44px 35px 27px;
    align-items: center;
    width: 100%;
    margin-bottom: 60px;
`;
    
const ModalScroll = styled.ScrollView`
    width: 100%;
    padding: 30px 38px 0;
`;

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    background: rgba(74, 74, 74, 0.63);
`;

const FlexBox = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
`;

const CenterBox = styled.View`
    align-items: center;
`;

const ProductsCards = styled.ScrollView`
`;

const СategoriesAll = styled.TouchableOpacity`
    flex.direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 18px;
    margin-bottom: 20px;
`;

const СategoriesAllText = styled.Text`
    width: 100%;
    text-align: right;
    color: ${colors.ActiveColor};
    font-size: 14px;
    font-weight: bold; 
`;

const ProductsView = styled.View`
    margin-top: 27px;
`;

const FilterText = styled.Text`
    font-size: 10px;
    color: ${colors.PassiveTextColor};
    margin-left: 3px;
`;

const FilterContent = styled.TouchableOpacity`
    flex.direction: row;
    align-items: center;
`;

const TitleContent = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.TitleColor};
    width: 170px;
`;

const Head = styled.View`
    flex.direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    padding-left: 18px;
`;

const Content = styled.View`
    padding: 40px 0 40px 22px;
`;

const СategoriesItem = styled.Text`
    border-bottom-width: ${props => props.active ? '3px' : '0px'};
    color: ${props => props.active ? `${colors.TextColor}` : `${colors.PassiveTextColor}`};
    border-bottom-color: ${colors.ActiveColor};
    font-size: 15px;
    padding: 12px 15px;
`;

const MarkupBtn = styled.TouchableOpacity`
    margin-right: 5px;
`;

const Markups = styled.View`
    flex.direction: row;
    align-items: center;
`;

const СategoriesView = styled.View`
    flex.direction: row;
    align-items: center;
    padding: 0 20px;

`;

const SearchInput = styled.TextInput``;

const SearchBtn = styled.TouchableOpacity`
    margin-right: 15px;
`;

const SearchView = styled.View`
    flex.direction: row;
    align-items: center;
    background: #EFEEEE;
    border-radius: 30px;
    padding: 15px 30px; 
    margin-top: 18px;
`;

const PromoCode = styled.Text`
    color: ${colors.ActiveColor};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
`;

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
    itemStyle: {
        padding: 10,
      },
      textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
      },
});