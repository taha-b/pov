import { View, Image, Pressable, Dimensions, ScrollView, Animated } from 'react-native'
import { useState } from 'react'
import { Divider, Text } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { isColorDark } from "../../../functions/trips"

export default function listView({ trips, windowHeight }) {
    const [isExpanded, setIsExpanded] = useState(-1);
    const [Desc, setDesc] = useState("");
    const handleView = (i, desc) => {
        if (isExpanded !== i) {
            trips.forEach((element, index) => {
                if (index < i) {
                    Animated.timing(element.height, {
                        toValue: windowHeight * 0.09,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                }
                else if (index === i) {
                    Animated.timing(element.height, {
                        toValue: windowHeight * 0.6,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                }
                else {
                    Animated.timing(element.height, {
                        toValue: windowHeight * 0.2,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                }
            });
            setDesc("")

            setTimeout(() => {
                setDesc(desc)
            }, 500);
            setIsExpanded(i);
        }
        else {
            trips.forEach((element, index) => {
                if (index <= isExpanded) {
                    Animated.timing(element.height, {
                        toValue: windowHeight * 0.2,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                }
            });
            setDesc("")

            setIsExpanded(-1)
        }
    };
    return (
        <View>
            <View style={{ height: "15%" }} />
            <View style={{ borderTopRightRadius: 50, overflow: "hidden", height: windowHeight * 0.843 }}>
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
                                            }} onPress={() => handleView(i, e?.data?.desc)}>
                                                {/* here */}
                                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086046916556640386/pngwing.com.png" }}
                                                    style={{ width: 40, height: 40 }}
                                                />
                                            </Pressable>
                                            : null}
                                        <Pressable onPress={() => handleView(i, e?.data?.desc)}
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
                                                    marginTop: "33.5%",
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
            </View>
        </View>
    )
}