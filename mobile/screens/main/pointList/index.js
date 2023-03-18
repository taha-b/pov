import { useEffect, useState, useRef } from 'react';
import { View, Image, Pressable, TouchableWithoutFeedback, ScrollView, Animated, Dimensions } from 'react-native';
import { Text } from '@ui-kitten/components';
import { getPoints, filterPoints } from "../../../functions/points"
import MapView from './map'

export default Points = ({ route, navigation }) => {
  const { trip } = route.params;
  const windowHeight = Dimensions.get("window").height + Dimensions.get("window").height * 0.07;

  const [isExpanded, setIsExpanded] = useState(false);

  const [points, setPoints] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState("All")
  const [desc, setDesc] = useState(
    trip.desc.length > 50 ?
      trip.desc.slice(0, 50) + " ..."
      : trip.desc
  )

  const firstSection = useRef(new Animated.Value(windowHeight * 0.3)).current;
  const secondSection = useRef(new Animated.Value(windowHeight * 0.73)).current;

  const uiColors = {
    bg: "white",
    primary: "#2b222e",
    secondary: "#ec6d68",
    secondaryBg: "#f5f5f5"
  }


  const handleView = () => {
    {
      const toValue = isExpanded ? windowHeight * 0.30 : windowHeight * 0.7;
      Animated.timing(firstSection, {
        toValue,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    {
      const toValue = isExpanded ? windowHeight * 0.73 : windowHeight * 0.4;
      Animated.timing(secondSection, {
        toValue,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }

    setIsExpanded(!isExpanded);
  };




  useEffect(() => {
    getPoints(trip.name, setPoints, setTags, setDesc)
  }, [])

  const navigate = (item) => {
    navigation.navigate('Details', {
      point: item
    })
  }

  return (
    <View style={{ height: windowHeight }}>

      <Pressable onPress={handleView} style={{
        zIndex: 1,
        height: 40,
        width: 40,
        position: "absolute",
        backgroundColor: "gray",
        borderRadius: 50,
        right: 30,
        top: 70,
        alignItems:"center",
        justifyContent:"center"
      }}>
        <Image style={{ width: "100%", height: "100%", zIndex:1 }}
          source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086475739949453332/pngegg.png" }}
        />
      </Pressable>

      <Animated.View style={{ height: firstSection }}>
        <TouchableWithoutFeedback onPress={() => {
          console.log("Pressd")
        }}>
          <View style={{ flex: 1 }}>

            {isExpanded ? <MapView points={points} navigate={navigate}
              latitude={trip.position?.latitude} longitude={trip.position?.longitude} /> :
              <Image style={{
                width: "100%",
                height: "100%",
              }}
                source={{ uri: trip.imgUrl || "" }}
              />}
          </View>

        </TouchableWithoutFeedback>
      </Animated.View>

      <Animated.View style={{
        height: secondSection,
        width: "100%",
        backgroundColor: uiColors.bg,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: "absolute",
        bottom: 0
      }}>
        <View style={{
          backgroundColor: uiColors.secondaryBg,
          width: "72%",
          height: 35,
          marginTop: "7%",
          borderRadius: 40,
          marginLeft: "14%",
          display: "flex",
          flexDirection: "row"
        }}>
          <View style={{ borderRadius: 40, overflow: 'hidden' }}>
            <ScrollView horizontal={true}>
              {tags.map((e, i) => {
                return (
                  <Pressable key={i} style={{
                    backgroundColor: selectedTag === e ? uiColors.secondary : "transparent",
                    height: "100%",
                    borderRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 99
                  }} onPress={() => { setSelectedTag(e); filterPoints(setPoints, e) }}>
                    <Text category='h1'
                      style={{
                        color: selectedTag === e ? "white" : "#342c36",
                        fontSize: 15
                      }}>{e}</Text>
                  </Pressable>
                )
              })}
            </ScrollView>
          </View>
        </View>


        <Text category='h1' style={{
          color: '#342c36',
          textAlign: "center",
          marginTop: "10%"
        }} >{trip.name || ""}</Text>


        <Text onPress={() => {
          if (desc !== trip.desc) {
            setDesc(trip.desc)
          } else {
            setDesc(trip.desc.slice(0, 50) + " ...")
          }
        }} style={{ width: "60%", textAlign: "center", marginLeft: "20%" }}>
          {desc}
        </Text>




        {isExpanded || <View style={{
          backgroundColor: "white",
          width: "90%",
          height: "60%",
          marginTop: "10%",
          marginLeft: "5%"
        }}>

          <View style={{ flexDirection: "row", paddingBottom: "10%" }}>
            <Text category='h1' style={{ fontSize: 20, left: 0 }}>
              {selectedTag + " Points"}
            </Text>

          </View>

          <ScrollView>
            <View>
              {points.map((e) => {
                return (
                  <Pressable onPress={() => navigate(e)} key={e.id} style={{
                    width: "100%",
                    height: 70,
                    alignItems: "center",
                    flexDirection: "row"
                  }}>
                    <View style={{ width: "30%" }}>
                      <Image style={{
                        width: 70,
                        height: "80%",
                        borderRadius: 10
                      }} source={{ uri: e.imgUrl }} />
                    </View>
                    <View style={{ width: "70%" }}>
                      <Text style={{ fontSize: 16 }} category='h1' key={e.id}>
                        {e.name}
                      </Text>
                      <Text style={{ fontSize: 12 }} category='s1'>
                        {e.desc.slice(0, 30) + " ..."}
                      </Text>
                    </View>
                  </Pressable>
                )
              })}
            </View>
          </ScrollView>
        </View>}








      </Animated.View>
    </View >
  );
};


