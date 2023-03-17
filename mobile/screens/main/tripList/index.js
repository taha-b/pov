import { View, Image, Pressable, Dimensions, ScrollView, Animated } from 'react-native'
import { useEffect, useState, useRef } from 'react';
import ListView from './listView'
import { getTrips, handleSideBar } from "../../../functions/trips"

export default function index({ navigation, setHeader }) {
    const [trips, setTrips] = useState([])
    const windowHeight = Dimensions.get("window").height + Dimensions.get("window").height * 0.07;
    const windowWidth = Dimensions.get("window").width;
    const [isExpanded, setIsExpanded] = useState(-1);
    const [Desc, setDesc] = useState("");

    const [isShrinked, setIsShrinked] = useState(false);


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
        <View style={{ width: "100%", height: "100%", backgroundColor: "gray" }}>
            <Animated.View style={{
                width: "100%", height: showSideBar.containerHeight,
                backgroundColor: "black",
                marginLeft: showSideBar.marginLeft,
                marginTop: showSideBar.marginTop,
                borderTopLeftRadius: showSideBar.borderRadius,
                borderBottomLeftRadius: showSideBar.borderRadius
            }}>

                <Pressable
                    style={{
                        width: 50,
                        height: 50,
                        zIndex: 1,
                        position: "absolute",
                        top: 20,
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
                <Image style={{
                    width: 35,
                    height: 35,
                    zIndex: 1,
                    position: "absolute",
                    top: 50,
                    right: 30
                }}
                    source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086054768310485102/magnifying-glass-search-white-icon-transparent-png-11640439066z98pnu1jta-removebg-preview.png" }} />



                <ListView trips={trips} showSideBar={showSideBar} windowHeight={windowHeight} />
            </Animated.View >
        </View >
    );

}