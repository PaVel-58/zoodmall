import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    ScrollView,
    Dimensions
} from 'react-native';

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

let windowWidth = Dimensions.get('window').width;

export default function SliderImage(props) {
    const [position, setPosition] = useState(0);
    const [activeSlide, setActive] = useState();
    // console.log('------------------------');
    return (
        <Wrapper>
            <Slider
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                canCancelContentTouches={true}
                // onMomentumScrollBegin={() => {console.log('touch start');}}
            >
                {props.slides.map(function(item, i){
                    return <View>
                        <SliderItem
                            source={{
                                uri: `${item}`,
                            }}
                        />
                        {/* <View>{console.log(i)}</View> */}
                        {/* <Text>{i + 1}</Text> */}
                    </View>
                })}
            </Slider>
            {/* <Text>{props.slides.length}</Text> */}
            <Pagination>
                {props.slides.map((obj, i, c) => (
                    <SlideDots active={position == i ? true : false}></SlideDots>
                ))}
            </Pagination>
        </Wrapper>
    )
}

const SliderItem = styled.Image`
    width: ${windowWidth};
    height: 350px;
`;

const Slider = styled.ScrollView`
    position: relative;
`;

const SlideDots = styled.TouchableOpacity`
    width: 7px;
    height: 7px;
    background: ${props => props.active ? `#0CA4FA` : `#3B3734`};
    border-radius: 50px;
    margin: 3px;
`;

const Pagination = styled.View`
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    width: 100%;
    background: transparent;
`;

const ImageSlider = styled.View`
    width: 100%;
`;

const Wrapper = styled.View`
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
`;