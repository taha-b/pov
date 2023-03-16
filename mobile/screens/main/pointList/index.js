import { useEffect, useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import { Divider, List, ListItem, Layout } from '@ui-kitten/components';
import { getPoints } from "../../../functions/points"
import ListView from "./listView"
import MapView from './map'

export default Points = ({ route, navigation }) => {
  const { trip, setHeader } = route.params;
  const [points, setPoints] = useState([])
  const [view, setView] = useState(0)
  console.log(trip.position)
  useEffect(() => {
    getPoints(trip.name, setPoints)

    setHeader(true)
    return () => {
      setHeader(true);
    }
  }, [])

  const navigate = (item) => {
    navigation.navigate('Details', {
      point: item,
      setHeader
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: "100%", height: 50, backgroundColor: "gray",
        position: "absolute", zIndex: 1, bottom: 0, display: "flex", flexDirection: "row"
      }}>
        <Pressable onPress={() => setView(1)}
          style={{ width: "50%", backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
          <Image source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1083797693668790272/location.png" }}
            style={{ width: 33, height: 33 }} />
        </Pressable>
        <Pressable onPress={() => setView(0)}
          style={{ width: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
          <Image source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1083797693928841295/list.png" }}
            style={{ width: 33, height: 33 }} />
        </Pressable>
      </View>



      {view ? <MapView points={points} navigate={navigate}
        latitude={trip.position?.latitude} longitude={trip.position?.longitude} /> :
        <ListView navigate={navigate} setHeader={setHeader} points={points} />}
    </View>
  );
};


