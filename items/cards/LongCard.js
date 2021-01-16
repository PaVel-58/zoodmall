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
    Dimensions,
    FlatList,
    Animated
} from 'react-native';

import { Counter } from '../index'

// import dependencies
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

// import Icon's family 
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

// swipeable begin
const Separator = () => <View style={styles.itemSeparator} />

const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })
    return (
        <SwipeBox>
            <SwipeBtn onPress={() => alert('Delete button pressed')}>
                <Animated.Text>
                    <FavoriteIcon />,
                            sizePickerData: props.sizePickerData
                </Animated.Text>
            </SwipeBtn>
            <SwipeBtnDel onPress={() => alert('Archive button pressed')}>
                <Animated.Text>
                    <Ionicons name="ios-close" color={colors.PassiveColor} size={30}/>
                </Animated.Text>
            </SwipeBtnDel>
        </SwipeBox>
    )
}
// swipeable end

export default function LongCard(props) {
    const navigation = useNavigation();
    return (
        <Swipeable renderRightActions={RightActions}>
            <Card>
                <ImageBorder
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
                </ImageBorder>
                 {/* <ImageCard source={require(`${props.image}`)} />  */}
                <ContentView>
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
                    <FlexBox>
                        <PriceCard>{props.price} UZS</PriceCard>
                        <Counter />
                    </FlexBox>
                </ContentView>
            </Card>
        </Swipeable>
    );
}

const SwipeBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const SwipeBtnDel = styled.TouchableOpacity`
    border-radius: 150px;
    width: 45px;
    height: 45px;
    background: #626262;
    text-align: center;
    justify-content: center;
    text-align: center;
    padding: 17px;
    margin-left: 10px;
`;

const SwipeBtn = styled.TouchableOpacity`
    border-radius: 150px;
    width: 45px;
    height: 45px;
    background: #626262;
    text-align: center;
    justify-content: center;
    padding: 10px;
    margin-left: 10px;
`;

const PriceCard = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: ${colors.ActiveColor};
`;

const FlexBox = styled.View`
    flex.direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    width: 100%;
`;

const NameCard = styled.Text`
    font-size: 13px;
    color: ${colors.CardNameColor};
    text-align: right;
`;

const ContentView = styled.View`
    width: 190px;
`;

const ImageCard = styled.Image`
    width: 100%;
    height: 100%;
`;

const ImageBorder = styled.TouchableOpacity`
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border-radius: 150px;
    width: 79px;
    height: 79px;
`;

const Card = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    background: ${colors.CardBackground};
    border-radius: 30px;
    padding: 15px 25px 15px;
    margin: 5px 0;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    itemSeparator: {
      flex: 1,
      height: 1,
      backgroundColor: '#444'
    }
});