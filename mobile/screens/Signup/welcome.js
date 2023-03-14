import { View, TouchableWithoutFeedback, Keyboard, Text, Pressable, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { getTrips } from '../../functions/points';
import { signup } from '../../functions/signin';

import Lottie from 'lottie-react-native';
export default function Index({ setUser }) {


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ backgroundColor: '#181d3d', height: '100%', }}>
                <View style={{
                    backgroundColor: 'white',
                    height: '55%',
                    borderBottomRightRadius: 100
                }} >
                    <Lottie source={require('../../assets/animation/landing.json')}
                        autoPlay loop />

                </View>
                <View style={{
                    backgroundColor: '#181d3d',
                    height: '45%',
                    borderTopLeftRadius: 100
                }} >
                    <View style={{ height: "20%" }} />
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 28
                    }} >Plan your perfect trip</Text>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 20,
                        marginTop: "10%",
                        paddingLeft: "10%",
                        paddingRight: "10%",

                    }} >discover amazing destinations and create unforgettable memories</Text>

                    <View style={{ alignSelf: 'center' }}>
                        <Pressable
                            onPress={() => {
                                navigation.navigate("Login")
                                signup(setUser)
                            }}
                            style={{
                                backgroundColor: "#f95465",
                                height: 60,
                                width: 160,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: "15%"
                            }}>
                            <Text style={{ color: "white", fontSize: 18 }}>
                                Let's Start {" "}
                                <Image
                                    source={{ uri: 'https://cdn.discordapp.com/attachments/1073737355896299542/1082302410590003350/oie_615244wSTgL8EF.png' }}
                                    style={{ width: 15, height: 15 }}
                                    resizeMode="contain"
                                />
                            </Text>


                        </Pressable>

                    </View>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    height: '100%',
                    width: "50%",
                    position: "absolute",
                    zIndex: -1,
                    backgroundColor: 'white'
                }}>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
