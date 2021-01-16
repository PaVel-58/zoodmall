import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Button,
    Image, 
} from 'react-native';

// import dependencies
import styled from 'styled-components/native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Icon's family 
import Entypo from 'react-native-vector-icons/Entypo';

// colors
const colors = require('../../variables');

// Icons
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

export default function BigCard(props) {
    const navigation = useNavigation();
    return (
        <Card>
            <CardBg>
                <ImageBorder>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Product', {
                            id: props.id,
                            image: props.image,
                            name: props.name,
                            discription: props.discription,
                            categories: props.categories,
                            price: props.price, 
                            sale: props.sale,
                            favorite: props.favorite,
                            colors: props.colors,
                            sizeData: props.sizeData
                        })}
                    >
                        <ImageCard source={require('../../assets/images/Card.png')} resizeMode='cover' />
                    </TouchableOpacity>
                </ImageBorder>
                {/* <ImageCard source={require(`${data.image}`)} /> */}
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Product', {
                        id: props.id,
                        image: props.image, 
                        name: props.name,
                        discription: props.discription,
                        categories: props.categories,
                        price: props.price, 
                        sale: props.sale,
                        favorite: props.favorite,
                        colors: props.colors,
                        sizeData: props.sizeData
                    })}>            
                    <NameCard>{props.name}</NameCard>
                </TouchableOpacity>
                <FlexBox>
                    <PriceCard>{props.price} UZS</PriceCard>
                    <FavoriteBtn><FavoriteIcon favorite={props.favorite} /></FavoriteBtn>
                </FlexBox>
            </CardBg>
        </Card>
    );
}

const FlexBox = styled.View`
    flex.direction: row;
    align-items: center;
    margin-top: 27px;
`;

const FavoriteBtn = styled.TouchableOpacity``;

const PriceCard = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: ${colors.ActiveColor};
    margin-right: 20px;
`;

const NameCard = styled.Text`
    width: 100px; 
    font-size: 16px;
    color: ${colors.CardNameColor};
    text-align: center;
`;

const ImageCard = styled.Image``;

const ImageBorder = styled.View`
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 11%;
    top: -60px;
    z-index: 1000;
    border-radius: 150px;
    width: 172px;
    height: 164px;
`;

const CardBg = styled.View`
    background: ${colors.CardBackground};
    border-radius: 30px;
    padding: 110px 38px 30px;
    align-items: center; 
`;

const Card = styled.View`
    position: relative;
    padding-top: 60px;
    margin: 0 15px;
`;