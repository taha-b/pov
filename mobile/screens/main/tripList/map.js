import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Text, Layout } from '@ui-kitten/components';

export default function App({ trips }) {

    return (
        <MapView
            style={{
                width: '100%',
                height: '100%',
            }}
            initialRegion={{
                latitude: 36.8065,
                longitude: 10.1815,
                latitudeDelta: 0.35,
                longitudeDelta: 0.35,
            }}
        >
            {trips.map((e, i) => {
                if (e.position) {
                    const { latitude, longitude } = e.position
                    console.log(e.position, "azeaze")
                    return <Marker
                        coordinate={{ latitude, longitude }}
                        key={i}
                        title={e.name || ""}
                        description={e.desc || ""}
                    >
                        <Callout >
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

