import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Text, Layout } from '@ui-kitten/components';

export default function App({ points, latitude, longitude, navigate }) {
    console.log(latitude, longitude, "aze")
    return (
        <MapView
            style={{
                width: '100%',
                height: '100%',
            }}
            initialRegion={longitude && latitude ? {
                latitude, longitude,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            } : {
                latitude: 36.8065,
                longitude: 10.1815,
                latitudeDelta: 0.3,
                longitudeDelta: 0.3,

            }}
        >
            {points.map((e, i) => {
                if (e.position) {
                    const { latitude, longitude } = e.position
                    return <Marker
                        coordinate={{ latitude, longitude }}
                        key={i}
                        title={e.name || ""}
                        description={e.desc || ""}>
                        <Callout onPress={() => navigate(e)}>
                            <Layout style={{ width: 150, height: 100 }}>
                                <Text category='h4' style={{ textAlign: "center" }}>{e.name || ""}</Text>
                                <Text category='s1' style={{ textAlign: "center" }}>{e.desc || ""}</Text>
                            </Layout>
                        </Callout>
                    </Marker>
                }
            })}

        </MapView>
    );
}

