import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Button,
    Image, 
    TextInput
} from 'react-native';

// import dependencies
import styled from 'styled-components/native';

// colors
const colors = require('../variables');

export default function Counter(props) {
    const [counter, setCount] = useState(1);
    let maxQuantity = 20;
    return (
        <CounterBox>
            <CounterButton
                onPress={() => {
                    if (counter != 1) {
                        setCount(counter - 1);
                    } else {
                        setCount(counter);
                    }
                }}
            ><CounterText>--</CounterText></CounterButton>
            <CounterText>{counter}</CounterText>
            <CounterButton
                onPress={() => {
                    if (counter != maxQuantity) {
                        setCount(counter + 1);
                    } else {
                        setCount(counter);
                    }
                }}
            ><CounterText>+</CounterText></CounterButton>
        </CounterBox>
    );
}

const CounterText = styled.Text`
    color: #fff;
    font-size: 13px;
`;

const CounterButton = styled.TouchableOpacity`
    padding: 5px 11px;
`;

const CounterBox = styled.View`
    flex.direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${colors.ActiveColor}
    border-radius: 30px;
`;