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

export default function SizePicker(props) {
    const [active, setActive] = useState(false);
    const [isSelected, setSelect] = useState(0)
    let arrPicker = props.SizePickerData;
    
    arrPicker.sort((a, b) => a.size - b.size);
    return (
        <Wrapper>
            <Flex
                formHorizontal={true}
                animation={true}
            >
            {
                arrPicker.map((obj, i, c) => (
                    <SizeButtons 
                        isActive={isSelected == i && arrPicker[i].have == true ? true : false}
                        onPress={() => {
                            setSelect(i);
                        }}
                    >   
                        <HaveNot have={arrPicker[i].have}/>
                        <Background>
                            <SizeText active={isSelected == i && arrPicker[i].have == true ? true : false}>{arrPicker[i].size}</SizeText>
                        </Background>
                    </SizeButtons>
                ))
            }  
            </Flex>
        </Wrapper>
    );
}

const SizeText = styled.Text`
    color: ${props => props.active ? `${colors.ActiveColor}` : `#D0D0D0`};
    font-size: 12px;
`;

const Background = styled.View`
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    width: 100%;
    height: 100%;
    border-radius: 4px;
`;

const HaveNot = styled.View`
    position: absolute;
    top: 50%;
    right: -2px;
    z-index: 10000;
    height: 2px;
    width: 120%;
    background: ${props => props.have ? `transparent` : `#D0D0D0`};
    transform: rotate(45deg);
`;

const SizeButtons = styled.TouchableOpacity`
    position: relative;
    border: ${props => props.isActive ? `${colors.ActiveColor}` : `transparent`};
    border-width: 2px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    border-radius: 4px;
    width: 35px;
    height: 35px;
    padding: 1px;
`;

const Flex = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

const Wrapper = styled.View``;