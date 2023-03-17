import { View, Image, Pressable, Dimensions, ScrollView, Animated } from 'react-native'
import { useEffect, useState, useRef } from 'react';
import ListView from './listView'
import { getTrips } from "../../../functions/trips"
import { Divider, Text } from '@ui-kitten/components';

export default function index({ navigation, setHeader }) {
    const [trips, setTrips] = useState([])
    const windowHeight = Dimensions.get("window").height + Dimensions.get("window").height * 0.07;


    useEffect(() => {
        getTrips(setTrips, windowHeight, Animated)

        setHeader(false)

    }, [])


    return (
        <View>
            <View style={{
                width: "100%", height: windowHeight,
                backgroundColor: "black",
                // marginLeft:"70%"
            }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    zIndex: 1,
                    position: "absolute",
                    top: 38,
                    left: 10
                }}
                    source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086054768507621496/CITYPNG.COMWhite_User_Member_Guest_Icon_PNG_Image_-_4000x4000.png" }} />
                <Image style={{
                    width: 35,
                    height: 35,
                    zIndex: 1,
                    position: "absolute",
                    top: 50,
                    right: 30
                }}
                    source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086054768310485102/magnifying-glass-search-white-icon-transparent-png-11640439066z98pnu1jta-removebg-preview.png" }} />
                <ListView windowHeight={windowHeight} trips={trips} />
            </View >
        </View>
    );

}