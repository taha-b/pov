import { View, Text } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

export default function index() {
    return (
        <View style={{ width: "100%", height: "100%", position: "absolute", zIndex: 55 }}>
            <View style={{ backgroundColor: "black", width: "100%", height: "100%", opacity: 0.7 }}>

            </View>
            <Lottie source={require('../../assets/animation/loading.json')}
                autoPlay loop />
        </View>
    )
}