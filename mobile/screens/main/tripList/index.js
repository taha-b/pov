import { View, Image, Pressable, Dimensions, Animated, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import ListView from './listView'
import { getTrips, handleSideBar } from "../../../functions/trips"
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Text } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index({ navigation, setHeader, setUser, user }) {
    const [trips, setTrips] = useState([])
    const windowHeight = Dimensions.get("window").height + Dimensions.get("window").height * 0.07;
    const windowWidth = Dimensions.get("window").width;


    let showSideBar = {
        status: false,
        marginLeft: new Animated.Value(0),
        containerHeight: new Animated.Value(windowHeight * 0.87),
        marginTop: new Animated.Value(0),
        borderRadius: new Animated.Value(0)
    }
    useEffect(() => {
        getTrips(setTrips, windowHeight, Animated)

        setHeader(false)

    }, [])



    return (
        <LinearGradient
            colors={["#C04848", "#480048"]}
            end={{ x: 0, y: 1 }}
            start={{ x: 1, y: 0 }}

            style={{ width: "100%", height: "100%", backgroundColor: "gray" }}>
            <View style={{
                position: "absolute", width: "70%",
                height: "100%",
            }}>
                <View style={{
                    width: 110, height: 110,
                    marginTop: "40%",
                    marginLeft: "5%",
                }}>
                    <Image style={{ width: "100%", height: "100%", borderRadius: 70 }}
                        source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086281404972814497/9908fc00-5398-11ec-b7bf-8dded52a981b.cf.jpg" }}
                    />
                    <Text
                        style={{
                            color: "white", width: "100%",
                            textAlign: "center", fontSize: 28,
                            marginTop: 40,
                            width: 120
                        }}
                        category="h1">{user?.name || "_"}</Text>
                </View>
                <View style={{ marginTop: "25%" }} />

                <Text
                    style={{ width: "100%", marginLeft: "1%", fontSize: 20, marginTop: "5%" }}
                    category="h1"> {user?.email}
                </Text>
                <Divider style={{
                    marginTop: "20%",
                    backgroundColor: '#222b45',
                    width: "80%",
                    alignSelf: "center"
                }} />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Edit')
                }}>
                    <Text
                        style={{ width: "100%", marginLeft: "1%", fontSize: 20, marginTop: "5%" }}
                        category="h1"> Edit Profile
                    </Text>
                </TouchableOpacity>
                <Divider style={{
                    marginTop: "6.9%",
                    backgroundColor: '#222b45',
                    width: "80%",
                    alignSelf: "center"
                }} />
                <Text
                    onPress={() => navigation.navigate('History')}
                    style={{ width: "100%", marginLeft: "1%", fontSize: 20, marginTop: "5%" }}
                    category="h1"> History
                </Text>
                <Divider style={{
                    marginTop: "6.9%",
                    backgroundColor: '#222b45',
                    width: "80%",
                    alignSelf: "center"
                }} />
                <Text onPress={() => {
                    AsyncStorage.removeItem('user');
                    setUser(null)
                }}
                    style={{ width: "100%", marginLeft: "1%", fontSize: 20, marginTop: "5%", color: "#D2042D" }}
                    category="h1"> Log out
                </Text>
                <Divider style={{
                    marginTop: "6.9%",
                    backgroundColor: '#222b45',
                    width: "80%",
                    alignSelf: "center"
                }} />

            </View>
            <Animated.View style={{
                width: "100%", height: showSideBar.containerHeight,
                // backgroundColor: "black",
                marginLeft: showSideBar.marginLeft,
                marginTop: showSideBar.marginTop,
                borderTopLeftRadius: showSideBar.borderRadius,
                borderBottomLeftRadius: showSideBar.borderRadius,
                position: "absolute",
            }}>
                <LinearGradient
                    colors={["#200122", "#FC354C", "#200122"]}
                    end={{ x: 0, y: 1 }}
                    start={{ x: 1, y: 1 }}
                    style={{ borderTopLeftRadius: 20 }}
                >


                    <Pressable
                        style={{
                            width: 50,
                            height: 50,
                            zIndex: 1,
                            position: "absolute",
                            top: 40,
                            // top: 38,
                            left: 10

                        }}
                        onPress={() => {
                            handleSideBar(Animated, showSideBar, windowWidth, windowHeight)
                        }}>
                        <Image style={{
                            width: "100%",
                            height: "100%"
                        }}
                            source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086054768507621496/CITYPNG.COMWhite_User_Member_Guest_Icon_PNG_Image_-_4000x4000.png" }} />

                    </Pressable>


                    <ListView navigation={navigation} trips={trips} showSideBar={showSideBar} windowHeight={windowHeight} />

                </LinearGradient>

            </Animated.View >
        </LinearGradient >
    );

}