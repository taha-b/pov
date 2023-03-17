import { View, Image, Pressable, Dimensions, ScrollView, Animated } from 'react-native'
import { useEffect, useState } from 'react'
import { Divider, Text } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { isColorDark, handleView } from "../../../functions/trips"

export default function listView({ trips, windowHeight ,showSideBar }) {
    const [isExpanded, setIsExpanded] = useState(-1);
    const [Desc, setDesc] = useState("");

    return (
        <View>
            <View style={{ height: "15%" }} />
                <Animated.View style={{
                    borderTopRightRadius: 50, overflow: "hidden",
                    height: showSideBar.containerHeight, borderBottomLeftRadius: showSideBar.borderRadius
                }}>
                    <ScrollView>
                        {trips.map((e, i) => {
                            const { randomGradient, height } = e;
                            return (
                                <View key={i}>
                                    <Animated.View
                                        style={{
                                            borderTopRightRadius: 50,
                                            height,
                                            marginTop: i === 0 ? 0 : "-10%",
                                        }}
                                    >
                                        <LinearGradient
                                            colors={randomGradient}
                                            end={{ x: 0, y: 1 }}
                                            start={{ x: 1, y: 0 }}
                                            style={{
                                                flex: 1,
                                                borderTopRightRadius: 50,
                                            }}
                                        >
                                            {isExpanded === i ?
                                                <Pressable style={{
                                                    position: "absolute",
                                                    width: 50,
                                                    height: 50,
                                                    right: 40,
                                                    top: 40,
                                                    zIndex: 1
                                                }} onPress={() => handleView(i, e?.data?.desc, Animated, windowHeight, isExpanded, trips, setDesc, setIsExpanded)}>
                                                    <Image source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086046916556640386/pngwing.com.png" }}
                                                        style={{ width: 40, height: 40 }}
                                                    />
                                                </Pressable>
                                                : null}
                                            <Pressable onPress={() => handleView(i, e?.data?.desc, Animated, windowHeight, isExpanded, trips, setDesc, setIsExpanded)}
                                                style={{ height: 150 }}>
                                                <Text style={{
                                                    zIndex: 1,
                                                    marginTop: "10%",
                                                    marginLeft: "5%",
                                                    color: "white"
                                                }}
                                                    category='h1'>
                                                    {e?.data?.name}
                                                </Text>
                                            </Pressable>

                                            <Pressable onPress={() => console.log("éazesq")}>
                                                {isExpanded === i ? <LinearGradient
                                                    colors={["transparent", randomGradient[1]]}
                                                    style={{
                                                        position: "absolute",
                                                        borderBottomRightRadius: 30,
                                                        borderBottomLeftRadius: 30,
                                                        width: "90%",
                                                        height: "40%",
                                                        alignSelf: "center",
                                                        marginTop: "33%",
                                                        zIndex: 1
                                                    }}
                                                /> : null}
                                                {isExpanded === i ?

                                                    <Text category='h1'
                                                        style={Object.assign({
                                                            fontSize: 18,
                                                            width: "80%",
                                                            marginLeft: "10%",
                                                            textAlign: "center",
                                                            position: "absolute",
                                                            zIndex: 2,
                                                            bottom: "30%",
                                                        }, isColorDark(randomGradient[1]) ? { color: "white" } : {})}>
                                                        {Desc}
                                                    </Text>
                                                    : null}

                                                {isExpanded === i ?
                                                    <Image source={{ uri: e?.data?.imgUrl }}
                                                        style={{
                                                            width: "90%",
                                                            height: "80%",
                                                            alignSelf: "center",
                                                            borderRadius: 30,
                                                            marginTop: "-4%"
                                                        }} />
                                                    : null}
                                            </Pressable>

                                        </LinearGradient>
                                    </Animated.View>
                                </View>

                            );
                        })}
                    </ScrollView>
                </Animated.View>
        </View>
    )
}