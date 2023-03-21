import { View, Pressable } from 'react-native';
import { Divider, Text } from '@ui-kitten/components';
import Lottie from 'lottie-react-native';

export default function App({ error, setError }) {

    return (
        <Pressable
            onPress={() => setError(null)}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1
            }}
        >
            <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.8 }} />

            <View style={{
                position: 'absolute',
                width: '100%',
                height: "70%",
                backgroundColor: 'white',
                zIndex: 5,
                borderRadius: 20,
                opacity: 1,
                bottom: 0
            }} >
                <Lottie source={require('../../assets/animation/error.json')}
                    autoPlay loop />
                <Divider style={{ backgroundColor: "black", marginTop: "2%", width: "20%", alignSelf: "center", height: 4, borderRadius: 20 }} />
                <Text category='s1' style={{ color: "red", fontSize: 20, textAlign: "center", marginTop: "6%", fontSize: 30 }} >
                    {typeof error === "string" ? error : "Server is down"}
                </Text>
            </View>
        </Pressable>
    );
}



