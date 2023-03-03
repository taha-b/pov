
import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Text, View, Image, TouchableOpacity } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: "879132217078-ngkq29bp871g6rgkp0u7qsvnsk6jafpv.apps.googleusercontent.com",
        iosClientId: "879132217078-8pim1b2fjoo2vi6j3kr2dqt21hmdanml.apps.googleusercontent.com",
        androidClientId: "879132217078-h9u63h1uek2qneinrairfjjcdmnltt15.apps.googleusercontent.com"

    });

    useEffect(() => {
        if (response?.type === "success") {
            setAccessToken(response.authentication.accessToken);
            accessToken && fetchUserInfo();
        }
    }, [response])

    async function fetchUserInfo() {
        let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const useInfo = await response.json();
        setUser(useInfo);
    }

    const ShowUserInfo = () => {
        if (user) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>Welcome</Text>
                    <Image source={{ uri: user.picture }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.name}</Text>
                </View>
            )
        }
    }

    return (
        <View >
            {user && <ShowUserInfo />}
            {user === null &&
                <>
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Welcome</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray' }}>Please login</Text>
                    <TouchableOpacity
                        disabled={!request}
                        onPress={() => {
                            promptAsync();
                        }}
                    >
                        <Image source={require("./btn.png")} style={{ width: 300, height: 40 }} />
                    </TouchableOpacity>
                </>
            }
        </View>
    );
}

