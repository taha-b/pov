import { View, Image, Pressable } from 'react-native'
import { useEffect, useState } from 'react';
import MapView from './map'
import ListView from './listView'
import { getTrips } from "../../../functions/points"
import { Divider } from '@ui-kitten/components';

export default function index({ navigation, setHeader }) {
    const [trips, setTrips] = useState([])
    const [view, setView] = useState(0)
    useEffect(() => {
        getTrips(setTrips)

        setHeader(true)

    }, [])


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



            {view ? <MapView trips={trips} /> : <ListView navigation={navigation} setHeader={setHeader} trips={trips} />}
        </View>
    )
}