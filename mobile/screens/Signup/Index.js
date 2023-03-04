import { View, TouchableWithoutFeedback, Keyboard, Text, Pressable } from 'react-native';

import Header from '../../components/Signin/Header'
import Inputs from './Inputs';
import { useState } from 'react';
import { useFonts, Lato_900Black, Lato_400Regular } from '@expo-google-fonts/lato';
export default function Index({ setView }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPass, setCheckPass] = useState('');
    const [checkPassFocus, setCheckPassFocus] = useState(0)

    let [fontsLoaded] = useFonts({
        Lato_900Black, Lato_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Header page={"Signup"} setView={setView}
                    focus={checkPassFocus} setFocus={setCheckPassFocus}
                />
                <View style={{ height: 80 }} />
                <Inputs
                    focus={checkPassFocus} setFocus={setCheckPassFocus}
                    email={email} setEmail={setEmail}
                    password={password} setPassword={setPassword}
                    checkPass={checkPass} setCheckPass={setCheckPass} />
                <View style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,

                }}>
                    <Pressable onPress={() => console.log({ email, password })}
                        style={{
                            backgroundColor: "#00b2ce",
                            width: 180,
                            height: 40,
                            display: "flex",
                            borderRadius: 20,
                        }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            marginTop: 5.5,
                            fontSize: 20
                        }}>Login</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 50, display: "flex", flexDirection: "row", alignSelf: "center" }}>

                    <Text
                        onPress={() => setView("Login")}
                        style={{ fontSize: 19 }}> Have A Account ?</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
