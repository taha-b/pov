import { View, TouchableWithoutFeedback, Keyboard, Text, Pressable } from 'react-native';
import Header from '../../components/Signin/Header'
import Inputs from './Inputs';
import { useState } from 'react';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
export default function Index({ setView }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let [fontsLoaded] = useFonts({
        Lato_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Header page={"Login"} />
                <View style={{ height: 80 }} />
                <Inputs email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
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
                <View style={{ marginTop: 50 }}>
                    <Text style={{ textAlign: "center", fontSize: 19 }}>Dont Have A Account ?</Text>
                    <Text onPress={() => setView("Signup")} style={{
                        textAlign: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                        fontFamily: 'Lato_900Black',
                        color: "#00b2ce",
                        marginTop: 10
                    }}>Sign Up!</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
