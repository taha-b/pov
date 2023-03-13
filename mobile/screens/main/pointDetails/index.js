import { View, Image, ScrollView, Pressable } from 'react-native'
import { useEffect, useState } from 'react';
import { Text } from '@ui-kitten/components';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Map from "./map"



export default function pointDetails({ route, navigation }) {
  const { setHeader, point } = route.params;
  const [showMap, setShowMap] = useState(false)
  const uiColors = {
    bg: "#242424",
    primary: "#dcd1c5",
    secondary: "#bd9555"
  }
  useEffect(() => {
    console.log(point, "aze")
    setHeader(false);
    return () => {
      setHeader(true);
    }
  }, []);

  return (
    <View style={{ height: "100%" }}>
      <View style={{
        height: showMap ? "68.5%" : "45%",
        backgroundColor: "gray",
      }} >

        {showMap ? <Map point={point} /> :
          <Image
            source={{ uri: point.imgUrl }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 1,
              borderRadius: 1,
            }}
            resizeMode="contain" />}



        <Svg
          style={{
            width: "100%", marginTop: showMap ? "68.5%" : "45%", height: "100%", zIndex: 1

          }}
          viewBox="0 0 1440 320"
        >
          <Path
            d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            fill={uiColors.bg} />
        </Svg>
      </View>
      <View style={{ height: showMap ? "31.5%" : "55%", backgroundColor: uiColors.bg, }}>
        <View style={{
          width: "90%",
          marginLeft: "5%",
          display: "flex",
          flexDirection: "row",
        }}>
          <View style={{ width: "59%", marginTop: "5%", }}>
            <Text style={{ color: uiColors.primary, fontSize: 50, letterSpacing: -2 }}
              category='h1'>{point?.name?.toUpperCase()}</Text>
          </View>
          <View style={{
            width: "41%", marginTop: "20%",
            alignItems: "center", marginLeft: "3%"
          }}>
            <View style={{ width: 90, borderRadius: 8, marginTop: -30 }}>
              <Text style={{ color: uiColors.primary }}>
                Tags
              </Text>
              <Text style={{
                color: uiColors.secondary,
                fontSize: 30,
                letterSpacing: -2,
                textAlign: "center",
              }} category='h1'>{"COFFE"}</Text>
            </View>
          </View>
        </View>







        {showMap || <View style={{ marginTop: "15%", width: "90%", marginLeft: "5%", height: "30%" }}>
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








        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: "8%"
        }}>
          <Pressable onPress={() => setShowMap(!showMap)} style={{
            width: "50%",
            height: 60,
            backgroundColor: uiColors.secondary,
            borderRadius: 12, justifyContent: "center"
          }}>
            <Text style={{
              color: uiColors.bg,
              fontSize: 20,
              textAlign: "center",
            }} category='h1'>SWITCH MAP</Text>

          </Pressable>
        </View>



      </View>
    </View >
  );
}
