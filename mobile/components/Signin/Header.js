import { Text, View, Pressable, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function App({ page, focus, setView }) {


    return (
        <View style={{ backgroundColor: "#00b2ce", height: 290, zIndex: focus }}>
            <Text style={{
                textAlign: 'center', color: 'white',
                marginTop: "30%",
                fontSize: 23,
                fontFamily: 'Lato_900Black'
            }}>{page}</Text>
            <View style={{ marginTop: 0, backgroundColor: "#00b2ce", width: "100%" }}>
                <Svg
                    style={{
                        width: "100%", height: 500, position: "absolute", marginTop: "-17%"
                    }}
                    viewBox="0 0 1440 320"
                >
                    <Path
                        d="M0,192L80,170.7C160,149,320,107,480,74.7C640,43,800,21,960,42.7C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                        fill="#00b2ce" />
                </Svg>


                {setView ?
                    <Pressable onPress={() => setView("Login")}>
                        <Image

                            source={{ uri: 'https://cdn.discordapp.com/attachments/1073737355896299542/1081369882664378420/favpng_arrow-icon-direction-icon-left-icon.png' }}
                            style={{ width: 40, height: 40, marginTop: -33, marginLeft: 20 }}
                            resizeMode="contain"
                        />
                    </Pressable> : null}
            </View>
        </View>

    );
}
