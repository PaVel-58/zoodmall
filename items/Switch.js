import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import styled from 'styled-components/native';
import Constants from "expo-constants";
// colors
const colors = require('../variables');

export default function Switch(props) {
    const [value, setValue] = useState(true);
    const [name, setName] = useState('Выключить');
    return (
        <View>
            <SwitchItem
                onPress={() => {setValue(!value); value ? setName('Выключить') : setName('Включить')}}
            >
                <SwitchBtn 
                    active={value}
                    onPress={() => {setValue(!value); value ? setName('Выключить') : setName('Включить')}}
                >
                    <TextBtn 
                        active={value}>
                        {name} 
                    </TextBtn>
                    </SwitchBtn>
            </SwitchItem>
        </View>
    );
}

const TextBtn = styled.Text`
    color: ${props => props.active ? `${colors.ActiveColor}` : `#5D5D5D`};
    font-weight: bold;
    font-size: 11px;
`;

const SwitchBtn = styled.TouchableOpacity`
    background: #E5E5EB;
    border-radius: 15px;
    height: 29px;
    width: 78px;
    justify-content: center;
    align-items: center;
    transform: ${props => props.active ? `translateX(0)` : `translateX(31px)`}
`;

const SwitchItem = styled.TouchableOpacity`
    background: #fff;
    border-radius: 15px;
    height: 29px;
    width: 109px;
`;