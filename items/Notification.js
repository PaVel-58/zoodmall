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

// import dependencies
import Constants from "expo-constants";
import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

// colors
const colors = require('../variables');

// import Icon's family 
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Icons

let IconData = {
    name: null,
    color: null
} 
const pencil = <MCI name="pencil-outline" color={colors.ActiveColor} size={16} />
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
                    <FavoriteIcon />
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

export default function NotificationsCard(props) {
    return (
        <Swipeable renderRightActions={RightActions}>
            <Card active={props.active}>
                <CardText active={props.active}>{props.text}</CardText>
                <FavoriteBtn><FavoriteIcon favorite={props.favorite} /></FavoriteBtn>
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
    text-align: center;
    padding: 10px;
    margin-left: 10px;
`;

const FavoriteBtn = styled.TouchableOpacity`
`;

const CardText = styled.Text`
    width: 90%;
    color: ${props => props.active ? `#fff` : `${colors.PassiveTextColor}`};
    font-size: 13px;
`;

const Card = styled.View`
    background: ${props => props.active ? `#626262` : `${colors.CardBackground}`};
    flex-direction: row;
    align-items: center;
    border-radius: 30px;
    padding: 15px;
    margin: 5px 0;
`;

const Wrapper = styled.View``;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    itemSeparator: {
      flex: 1,
      height: 1,
      backgroundColor: '#444'
    }
})