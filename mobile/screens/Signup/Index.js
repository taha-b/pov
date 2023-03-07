import { View, TouchableWithoutFeedback, Keyboard, Text, Pressable } from 'react-native';

import Header from '../../components/Signin/Header'
import Inputs from './Inputs';
import { useState } from 'react';
import { useFonts, Lato_900Black, Lato_400Regular } from '@expo-google-fonts/lato';
import { signup } from '../../functions/signin';
export default function Index({ setView, setUser }) {
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
                    <Pressable onPress={() => {
                        signup(email, password, checkPass, setUser)
                    }}
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
                        }}>Sign Up</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 50, display: "flex", flexDirection: "row", alignSelf: "center" }}>
                    <Text
                        onPress={() => setView("Login")}
                        style={{ fontSize: 19 }}> Have An Account ?</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
