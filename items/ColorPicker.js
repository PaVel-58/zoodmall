// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { 
//     StyleSheet, 
//     Text, 
//     View 
// } from 'react-native';

// export default function HistoryScreen() {
//     return (
//         <View></View>
//     );
// }

// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { 
//     StyleSheet, 
//     Text, 
//     View, 
//     SafeAreaView, 
//     ImageBackground, 
//     ScrollView, 
//     TouchableOpacity, 
//     TextInputComponent, 
//     Button,
//     Alert,
//     TextInput,
//     ActivityIndicator,
//     SegmentedControlIOS
// } from 'react-native';
// import Constants from "expo-constants";

// import styled from 'styled-components/native';

// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import colors from '../variables';

// export default function ColorPicker(props) {
//     let radio_props = [];
//     let propsColors = props.productColors;
//     propsColors.forEach(item => {
//         radio_props.push({color: `${item}`})
//     })

    
//     // var radio_props = 'asd';
//     const [value, setValue] = useState(false);
//     const [value3Index, setValueIndex] = useState(0);
//     return (
//         <Wrapper>
//             <RadioForm
//                 formHorizontal={true}
//                 animation={true}
//             >
//             {/* To create radio buttons, loop through your array of options */}
//             {
//                 radio_props.map((obj, i, c) => (
//                     <RadioButton labelHorizontal={true} key={i} >
//                         {/*  You can set RadioButtonLabel before RadioButtonInput */}
//                         <RadioButtonInput
//                             obj={obj}
//                             index={i}
//                             isSelected={value3Index === i}
//                             onPress={() => {setValueIndex(i)}}
//                             borderWidth={3}
//                             buttonInnerColor={'transparent'}
//                             buttonOuterColor={value3Index === i ? '#2196f3' : 'transparent'}
//                             buttonColor={35}
//                             buttonOuterColor={45}
//                             buttonStyle={{
//                                 backgroundColor: `${radio_props[i].color}`,
//                             }}
//                             buttonWrapStyle={{
                                
//                             }}
//                         />
//                         {/* <RadioButtonLabel
//                             obj={obj}
//                             index={i}
//                             labelHorizontal={true}
//                             onPress={() => {setValueIndex(i)}}
//                             labelStyle={{fontColor: 20, color: 'red'}}
//                             labelWrapStyle={{}}
//                         /> */}
//                     </RadioButton>
//                 ))
//             }  
//             </RadioForm>
//         </Wrapper>
//     );
// }

// const Wrapper = styled.View``;




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

export default function ColorPicker(props) {
    const [active, setActive] = useState(false);
    const [isSelected, setSelect] = useState(0)
    let allColors = props.productColors;
    return (
        <Wrapper>
            <Flex>
            {
                allColors.map(function(obj, i, c) {
                    return <ColorButtons 
                        isActive={isSelected == i ? true : false}
                        onPress={() => {
                            setSelect(i);
                        }}
                    >
                        <ProductColor color={allColors[i]}/>
                    </ColorButtons>
                })
            }  
            </Flex>
        </Wrapper>
    );
}

const ProductColor = styled.View`
    align-items: center;
    justify-content: center;
    background: ${props => props.color};
    width: 100%;
    height: 100%;
    border-radius: 50px;
`;

const ColorButtons = styled.TouchableOpacity`
    position: relative;
    border: ${props => props.isActive ? `${colors.ActiveColor}` : `transparent`};
    border-width: 2px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    border-radius: 50px;
    width: 35px;
    height: 35px;
    padding: 1px;
`;

const Flex = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

const Wrapper = styled.View``;