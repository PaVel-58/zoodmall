import React, { useState } from 'react';
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
    SegmentedControlIOS
} from 'react-native';
import Constants from "expo-constants";

import styled from 'styled-components/native';

import colors from '../variables';

export default function ManufacturerPicker(props) {
    const [active, setActive] = useState(false);
    const [isSelected, setSelect] = useState(0)
    let arrPicker = props.ManufacturerData;
    
    return (
        <Wrapper>
            <View
                formHorizontal={true}
                animation={true}
            >
            {
                arrPicker.map((obj, i, c) => (
                    <Flex>
                        <SizeButtons 
                            active={isSelected == i ? true : false}
                            onPress={() => {
                                setSelect(i);
                            }}
                        />
                        <SizeText active={isSelected == i ? true : false}>{arrPicker[i]}</SizeText>
                    </Flex>
                ))
            }  
            </View>
        </Wrapper>
    );
}

const SizeText = styled.Text`
    color: ${props => props.active ? `${colors.ActiveColor}` : `#D0D0D0`};
    font-size: 12px;
`;

const SizeButtons = styled.TouchableOpacity`
    position: relative;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    border-radius: 7px;
    background: ${props => props.active ? `${colors.ActiveColor}` : `#fff`};
    width: 18px;
    height: 18px;
    padding: 1px;
    flex-direction: row;
`;

const Flex = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

const Wrapper = styled.View``;