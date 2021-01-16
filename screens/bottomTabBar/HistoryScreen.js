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
const colors = require('../../variables');

export default function HistoryScreen() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});