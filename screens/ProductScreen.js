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
import { 
    ColorPicker, 
    SizePicker,
    SliderImage
 } from '../items/index';
// import { BuyOneClickScreen } from '../screens/index';

// import dependencies
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { SliderBox } from "react-native-image-slider-box";
import ImageSlider from 'react-native-image-slider';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
const   MenuIcon        = <Feather                      name="menu"             color="#000"                        size={22}/>,
        CartIcon        = <Feather                      name="shopping-cart"    color={colors.PassiveColor}         size={24}/>,
        SearchIcon      = <Feather                      name="search"           color="#000"                        size={24}/>,
        MarkupsFour     = <MaterialCommunityIcons       name="view-grid"        color={colors.PassiveIconColor}     size={20}/>,
        MarkupsOne      = <MaterialCommunityIcons       name="view-array"       color={colors.ActiveColor}          size={20}/>,
        FilterIcon      = <Fontisto                     name="arrow-swap"       color={colors.PassiveColor}         size={10}/>,
        MoreIcon        = <MaterialIcons                name="play-arrow"       color={colors.ActiveColor}          size={17}/>,
        GoBack          = <Ionicons                     name="md-chevron-backw" color="000000"                      size={17}/>,
        CloseBtnIcon    = <Ionicons                     name="ios-close"        color="#5E5E5E"                     size={30}/>;

let IconData = {
    name: null,
    color: null
} 

const FavoriteIcon = val => {
    if (val.favorite) {
        IconData.IconName="heart";
        IconData.color=`${colors.ActiveColor}`
    } else {
        IconData.IconName="heart-outlined"
        IconData.color=`${colors.PassiveColor}`
    }
    return (
        <Entypo name={IconData.IconName} color={IconData.color} size={25} />
    );
};
// Icons end-------------------------------------------------------------------------------

export default function ProductScreen({ route, navigation }) {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [modalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);
    const [zoom, setZoom] = useState(false);

    const toggleSwitch = (value) => {
      //To handle switch toggle
      setSwitchValue(value);
      //State changes according to switch
    };

    let images = [
        'data:image/jpeg;base64,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',
        'data:image/jpeg;base64,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',
        'data:image/jpeg;base64,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',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEIKXqIzmQGnLdaeQFMrD54cFlXGUPXa1-w&usqp=CAU'
    ]

    const { id, name, discription, categories, price, sale, favorite, colors, sizeData } = route.params;
    console.log(name);
    return (
        <Wrapper style={styles.container}>
            <ScrollView>
                <SliderImage slides={images}/>
                <ProductCard>
                    <FlexBox>
                        <ProductName>{name}</ProductName>
                        <FavoriteIcon favorite={favorite} />
                    </FlexBox>
                    <ProductCategory>{categories}</ProductCategory>
                    <ProductPrice>{price} UZS</ProductPrice>
                    <ProductSale>{sale} UZS</ProductSale>
                    <ProductFilterView>
                        <ProductItemTitle>Цвет</ProductItemTitle>
                        <FilterItems>
                            <ColorPicker productColors={colors}/>
                        </FilterItems>
                    </ProductFilterView>
                    <ProductFilterView>
                        <ProductItemTitle>Размер</ProductItemTitle>
                        <FilterItems>
                            <SizePicker 
                                SizePickerData={sizeData}
                            />
                        </FilterItems>
                    </ProductFilterView>
                    <ProductBuyBtn
                        onPress={() => navigation.navigate('BuyOneClick')}
                    >
                        <TextButton>Купить в один клик</TextButton>
                    </ProductBuyBtn>
                </ProductCard>
            </ScrollView>
        </Wrapper>
    );
}

const SliderContainer = styled.View`
    height: ${props => props.imgZoom ? `500px` : `300px`};
`;

const TextButton = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${colors.TextButtonColor};
`;

const ProductBuyBtn = styled.TouchableOpacity`
    background: ${colors.ActiveColor};
    border-radius: 30px;
    padding: 27px 0;
    align-items: center;
    margin-top: 47px;
    width: 100%;
`;

const FilterItems = styled.View``;

const ProductItemTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.TitleColor};
    margin-top: 7px;
`;

const ProductFilterView = styled.View``;

const ProductSale = styled.Text`
    font-size: 15px;
    color: ${colors.PassiveTextColor};
    margin: 4px 0;
    text-decoration-line: line-through;
    text-decoration-style: solid;
`;

const ProductPrice = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.ActiveColor};
`;

const ProductCategory = styled.Text`
    font-size: 15px;
    color: ${colors.PassiveTextColor};
    margin: 1px 0 7px;
`;

const ProductName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.TitleColor};
    width: 50%;
`;

const FlexBox = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ProductCard = styled.View`
    padding: 15px 45px;
`;

const ProductImage = styled.Image`
    width: 100%;
`;

const CarouselItem = styled.View``;

const ProductsCarousel = styled.View``;

const Wrapper = styled.View`
    background: #fff;
`;

// Stylesheet
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});