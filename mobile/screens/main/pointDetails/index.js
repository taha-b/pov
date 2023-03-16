import { View, Image } from 'react-native'
import { useEffect } from 'react';
import { Text } from '@ui-kitten/components';

export default function pointDetails({ route, navigation }) {
  const { setHeader, point } = route.params;

  useEffect(() => {
    console.log(point, "aze")
    setHeader(false);
    return () => {
      setHeader(true);
    }
  }, []);

  return (
    <View>
      <View style={{ height: "40%", backgroundColor: "gray" }} >
        <Image
          source={{ uri: point.imgUrl }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
            borderRadius: 1,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ backgroundColor: "white", height: "60%" }}>
        <Text style={{ textAlign: "center", marginTop: "15%" }} category='h1'>{point.name}</Text>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: "5%" }}
          category='s1'>{point.desc}</Text>
      </View>
    </View>
  );
}
