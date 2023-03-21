import { View, Pressable, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Text, Input } from '@ui-kitten/components';


export default function App({ page, focus, navigation }) {

    console.log(focus)
    return (
        <View style={{ width: "100%", height: "39%", }}>

            <LinearGradient
                colors={["#C04848", "#480048"]}
                end={{ x: 0, y: 1 }}
                start={{ x: 1, y: 0 }}
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Text
                    style={{
                        color: "white",
                        fontSize: 30
                    }}
                    category="h1" >
                    {page}
                </Text>
            </LinearGradient>
            <Svg
                style={{
                    width: "100%",
                    height: 500,
                    marginTop: "-73%",
                    // marginTop: "-70%",
                    transform: [{ scaleY: -1 }]
                }}
                viewBox="0 0 1440 320"
            >
                <Path
                    d="M0,192L80,170.7C160,149,320,107,480,74.7C640,43,800,21,960,42.7C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    fill="white"
                />
            </Svg>
        </View>

    );
}
