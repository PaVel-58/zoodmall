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
import { BigCard, LongCard, SmallCard, MiddleCard } from '../index';

// import dependencies
import styled from 'styled-components/native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Icon's family 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

// colors
const colors = require('../../variables');

// create dataObject begin
let dataField = {
    activeNetwork: {
        chengeNetwork: null,
        typeNetwork: null,
    },
    dataCard: {
        id: null,
        image: null, 
        name: null,
        discription: null,
        categories: null,
        price: null, 
        sale: null,
        favorite: null,
        colors: null,
        sizeData: null
    }
};
// create dataObject end



export default function CardsView(props) {
    
    let dataField = {
        activeNetwork: {
            typeNetwork: props.typeNetwork,
        },
        dataCard: {
            id: props.id,
            image:  "../../assets/images/Card.png", 
            name: props.name,
            discription: props.discription,
            categories: props.categories,
            price: props.price, 
            sale: props.sale,
            favorite: props.favorite,
            colors: props.colors,
            sizeData: props.sizeData
        }
    };

    const OptionCard = () => {
        if (dataField.activeNetwork.typeNetwork == 'infinity') {
            return ( 
                <BigCard 
                    id = {dataField.dataCard.id}
                    image = {dataField.dataCard.image} 
                    name = {dataField.dataCard.name}
                    discription = {dataField.dataCard.discription}
                    categories = {dataField.dataCard.categories}
                    price = {dataField.dataCard.price}
                    sale = {dataField.dataCard.sale}
                    favorite = {dataField.dataCard.favorite} 
                    colors = {dataField.dataCard.colors} 
                    sizeData = {dataField.dataCard.sizeData} 
                />
            )
        }
        else if (dataField.activeNetwork.typeNetwork == 'byOne') {
            return (
                <LongCard 
                    id = {dataField.dataCard.id}
                    image = {dataField.dataCard.image} 
                    name = {dataField.dataCard.name}
                    discription = {dataField.dataCard.discription}
                    categories = {dataField.dataCard.categories}
                    price = {dataField.dataCard.price}
                    sale = {dataField.dataCard.sale}
                    favorite = {dataField.dataCard.favorite} 
                    colors = {dataField.dataCard.colors} 
                    sizeData = {dataField.dataCard.sizeData} 
                />
            )
        }
        else if (dataField.activeNetwork.typeNetwork == 'byThree') {
            return (
                <SmallCard 
                    id = {dataField.dataCard.id}
                    image = {dataField.dataCard.image} 
                    name = {dataField.dataCard.name}
                    discription = {dataField.dataCard.discription}
                    categories = {dataField.dataCard.categories}
                    price = {dataField.dataCard.price}
                    sale = {dataField.dataCard.sale}
                    favorite = {dataField.dataCard.favorite} 
                    colors = {dataField.dataCard.colors} 
                    sizeData = {dataField.dataCard.sizeData} 
                />
            )
        }
        else if (dataField.activeNetwork.typeNetwork == 'byTwo') {
            return (
                <MiddleCard 
                    id = {dataField.dataCard.id}
                    image = {dataField.dataCard.image} 
                    name = {dataField.dataCard.name}
                    discription = {dataField.dataCard.discription}
                    categories = {dataField.dataCard.categories}
                    price = {dataField.dataCard.price}
                    sale = {dataField.dataCard.sale}
                    favorite = {dataField.dataCard.favorite} 
                    colors = {dataField.dataCard.colors} 
                    sizeData = {dataField.dataCard.sizeData} 
                />
            )
        } else {
            return (
                <Text>Error</Text>
            )
        }
    } 

    const TypeNetworkFunc = () => {
        if (dataField.activeNetwork.typeNetwork == 'infinity') {
            return (
                <ProductsCards horizontal={true}>
                    <OptionCard/>
                </ProductsCards>
            )
        }
        else if (dataField.activeNetwork.typeNetwork == 'byOne') {
            return (  
                <View>
                    <OptionCard/>
                </View>
            )
        }
        else if (dataField.activeNetwork.typeNetwork == 'byThree') {
            return (
                <CenterBox>
                    <FlexBox>
                        <OptionCard/>
                    </FlexBox>
                </CenterBox>
            )
        }
        else if (dataField.activeNetwork.typeNetwork == 'byTwo') {
            return ( 
                <Products>
                    <OptionCard/>
                </Products> 
            )
        } else {
            return (
                <Text>Error</Text>
            )
        }
    }

    return ( <TypeNetworkFunc/> )
}

const Products = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 0 13px;
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

const Wrapper = styled.View`
`;