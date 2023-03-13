import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Text, Layout } from '@ui-kitten/components';

export default function App({ navigate , point}) {
    const { latitude, longitude } = point.position
    const { name, desc } = point
    return (
        <MapView
            style={{
                width: '100%',
                height: '100%',
                zIndex: -1,
                top: 0,
                left: 0,
                position: "absolute"
            }}
            initialRegion={{
                latitude, longitude,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            }}
        >
            <Marker
                coordinate={{ latitude, longitude }}
                title={name || ""}
                description={desc || ""}>
                <Callout onPress={() => navigate(e)}>
                    <Layout style={{ width: 150, height: 100 }}>
                        <Text category='h4' style={{ textAlign: "center" }}>{name || ""}</Text>
                        <Text category='s1' style={{ textAlign: "center" }}>{desc || ""}</Text>
                    </Layout>
                </Callout>
            </Marker>

        </MapView>
    );
}

