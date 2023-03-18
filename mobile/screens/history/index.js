import {
    Dimensions, Pressable, Animated, Image
} from 'react-native'
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Text, Input } from '@ui-kitten/components';
import ListView from "./listView"
import { getHistory } from "../../functions/trips"

export default function index({ navigation, user }) {

    const windowHeight = Dimensions.get("window").height + Dimensions.get("window").height * 0.07;
    const windowWidth = Dimensions.get("window").width;
    const [history, setHistory] = useState(getHistory(user.history, windowWidth, Animated))

    let showSideBar = {
        status: false,
        marginLeft: 0,
        containerHeight: windowHeight * 0.87,
        marginTop: 0,
        borderRadius: 0
    }


    console.log(history)

    return (
        <LinearGradient
            colors={["#C04848", "#480048"]}
            end={{ x: 0, y: 1 }}
            start={{ x: 1, y: 0 }}
            style={{ width: "100%", height: "100%" }}>

            <Pressable style={{
                 position: "absolute",
                 top:"7%",
                 left:"5%",
                 zIndex:5
            }}
            onPress={() => navigation.goBack()}>
                <Image

                    source={{ uri: 'https://cdn.discordapp.com/attachments/1073737355896299542/1081369882664378420/favpng_arrow-icon-direction-icon-left-icon.png' }}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </Pressable>
            <ListView
                navigation={navigation}
                trips={history}
                showSideBar={showSideBar}
                windowHeight={windowHeight}
            />
        </LinearGradient>
    )
}