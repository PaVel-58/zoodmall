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
import { useNavigation } from '@react-navigation/native';

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
        <Entypo name={IconData.IconName} color={IconData.color} size={11} />
    );
};

export default function SmallCard(props) {
    const navigation = useNavigation();
    return (
        <Card>
            <CardBg>
                <ImageBox 
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
                    <ImageCard source={require('../../assets/images/Card.png')} resizeMode='contain' />
                </ImageBox>
                {/* <ImageCard source={require(`${props.image}`)} /> */}
                <FavoriteBtn><FavoriteIcon favorite={props.favorite} /></FavoriteBtn>
                <CenterBox>
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
                        <NameCard>{props.name}</NameCard>
                    </TouchableOpacity>
                    <PriceCard>{props.price} UZS</PriceCard>
                </CenterBox>
            </CardBg>
        </Card>
    );
}

const FlexBox = styled.View`
    flex.direction: row;
    align-items: center;
    margin-top: 27px;
`;

const FavoriteBtn = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const PriceCard = styled.Text`
    font-size: 9px;
    font-weight: bold;
    color: ${colors.ActiveColor};
    margin-top: 3px;
`;

const NameCard = styled.Text`
    width: 70px; 
    font-size: 10px;
    color: ${colors.CardNameColor};
    text-align: center;
    z-index: 10000;
`;

const CenterBox = styled.View`
    align-items: center; 
`;

const ImageBox = styled.TouchableOpacity`
    position: absolute;
    left: 30%;
    top: -65px;
`;

const ImageCard = styled.Image`
    z-index: 10;
    width: 55px;
`;

const CardBg = styled.View`
    background: ${colors.CardBackground};
    border-radius: 30px;
    padding: 40px 12px 13px;
    align-items: center; 
`;

const Card = styled.View`
    position: relative;
    padding-top: 35px;
    margin: 0 2px;
`;