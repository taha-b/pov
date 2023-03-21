import { View, Image, ScrollView, Pressable, Animated, TouchableWithoutFeedback, Dimensions, Linking } from 'react-native'
import { useEffect, useState, useRef } from 'react';
import { Text } from '@ui-kitten/components';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Map from "./map"
import { updateHistory } from "../../../functions/signin"

export default function pointDetails({ route, navigation, setUser, user }) {
  const { setHeader, point } = route.params;
  const windowHeight = Dimensions.get("window").height + Dimensions.get("window").height * 0.07;


  const firstSection = useRef(new Animated.Value(windowHeight * 0.45)).current;
  const svgMargin = useRef(new Animated.Value(windowHeight * 0.4)).current;
  const [isExpanded, setIsExpanded] = useState(false);


  const uiColors = {
    bg: "#242424",
    primary: "#dcd1c5",
    secondary: "#bd9555"
  }


  const handleSelect = () => {
    {
      const toValue = isExpanded ? windowHeight * 0.45 : windowHeight * 0.7;
      Animated.timing(firstSection, {
        toValue,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } {
      const toValue = isExpanded ? windowHeight * 0.4 : windowHeight * 0.65;
      Animated.timing(svgMargin, {
        toValue,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    setIsExpanded(!isExpanded);
  };


  return (
    <View style={{ height: windowHeight }}>
      <Animated.View style={{
        height: firstSection,
        backgroundColor: "gray",
      }} >

        {isExpanded ? <Map point={point} /> :
          <Image
            source={{ uri: point.imgUrl }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 1,
              borderRadius: 1,
            }}
            resizeMode="cover" />}
        <Animated.View style={{ zIndex: 5, marginTop: svgMargin, width: "100%", height: 92 }}>
          <Svg
            style={{
              width: "100%", height: "100%", zIndex: 5
            }}
            viewBox="0 0 1440 320"
          >
            <Path
              d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              fill={uiColors.bg} />
          </Svg>
        </Animated.View>
      </Animated.View>
      <View style={{ height: "55%", backgroundColor: uiColors.bg, }}>
        <View style={{
          width: "90%",
          marginLeft: "5%",
          display: "flex",
          flexDirection: "row",
        }}>
          <View style={{ width: "59%", marginTop: "5%", }}>
          <Text style={{ color: uiColors.primary, fontSize: point?.name?.length < 13 ? 50 : 35, letterSpacing: -2 }}
              category='h1'>{point?.name?.toUpperCase()}</Text>
          </View>
          <View style={{
            width: "41%", marginTop: "20%",
            alignItems: "center", marginLeft: "3%"
          }}>
            <LinearGradient colors={['transparent', uiColors.bg]}

              style={{
                width: 100,
                marginTop: -30,
                height: 100
              }
              }>
              <Text style={{ color: uiColors.primary }}>
                Tags
              </Text>
              <ScrollView style={{
                flexGrow: 1, flexShrink: 1,
                backgroundColor: "transparent",
                zIndex: -1,
                marginTop: 10,
              }}>
                {point?.tag?.map((e, i) => {
                  return (
                    <Text key={i} style={{
                      color: uiColors.secondary,
                      fontSize: 30,
                      letterSpacing: -2,
                    }} category='h1'>{e}</Text>
                  )
                })}
                <View style={{ height: 40 }} />
              </ScrollView>
            </LinearGradient>
          </View>
        </View>







        {isExpanded || <View style={{ marginTop: "15%", width: "90%", marginLeft: "5%", height: "30%" }}>
          <LinearGradient
            colors={['transparent', uiColors.bg]}
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              overflow: 'hidden',
            }}
          >
            <ScrollView style={{
              flexGrow: 1, flexShrink: 1,
              backgroundColor: "transparent", marginTop: -20,
              zIndex: -1
            }}>
              <Text category='s1' style={{
                color: uiColors.primary,
                lineHeight: 30, paddingHorizontal: 10,
                marginTop: 15
              }}>
                {point.desc + point.desc +
                  point.desc + point.desc
                  + point.desc +
                  point.desc +
                  point.desc}
              </Text>
            </ScrollView>
          </LinearGradient>
        </View>}








        {isExpanded ?
          <View style={{
            marginTop: "8%", width: "90%", marginLeft: "5%", display: "flex", flexDirection: "row"
          }}>
            <View onPress={() => setisExpanded(!isExpanded)} style={{
              width: "70%",
              height: 50,
              backgroundColor: uiColors.secondary,
              borderRadius: 12
            }}>
              <TouchableWithoutFeedback onPress={() => handleSelect()}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={{
                    color: uiColors.bg,
                    fontSize: 20,
                    textAlign: "center",
                  }} category='h1'>
                    SHOW DETAILS...
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>








              <View onPress={() => setisExpanded(!isExpanded)} style={{
                width: "33%",
                height: 40,
                backgroundColor: uiColors.primary,
                borderRadius: 12
              }}>
                <TouchableWithoutFeedback onPress={() => {

                  updateHistory(setUser, user, point).then(() => {
                    const url = `https://www.google.com/maps/dir/?api=1&destination=${point.position.latitude},${point.position.longitude}`;
                    Linking.openURL(url);
                  })
                }}>
                  <View style={{ flex: 1, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{
                      width: "70%",
                      height: "70%",
                      transform: [{ rotate: '90deg' }],
                      marginLeft: 4,
                      marginTop: -3
                    }}
                      source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1085189954038141059/icons8-send-48_1.png" }}
                    />
                  </View>

                </TouchableWithoutFeedback>
              </View>








            </View>

          </View>
          :
          <View style={{
            alignItems: 'center',
            marginTop: "8%"
          }}>
            <View onPress={() => setisExpanded(!isExpanded)} style={{
              width: "50%",
              height: 60,
              backgroundColor: uiColors.secondary,
              borderRadius: 12
            }}>
              <TouchableWithoutFeedback onPress={() => handleSelect()}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={{
                    color: uiColors.bg,
                    fontSize: 20,
                    textAlign: "center",
                  }} category='h1'>
                    SWITCH MAP
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>}



      </View>
    </View >
  );
}