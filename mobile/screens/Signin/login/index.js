import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, Pressable } from 'react-native';
import Header from '../../../components/Signin/Header'
import Inputs from './Inputs';
import { useState } from 'react';
import { login } from '../../../functions/signin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loading from "../../../components/Loading/Loading"
import Modal from "../../../components/Signin/Modal"
export default function Index({ navigation, setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focus, setFocus] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAwareScrollView style={{ backgroundColor: "white", height: "100%" }}
                contentContainerStyle={{ flexGrow: 1 }}>
                {error ? <Modal error={error} setError={setError} /> : null}
                {loading ? <Loading /> : null}
                <Header focus={focus} page={"Login"} />
                <View style={{ height: 80 }} />
                <Inputs
                    focus={focus}
                    setFocus={setFocus}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword} />
                <View style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                }}>
                    <Pressable onPress={() => login(email, password, setUser, setError, setLoading)}
                        style={{
                            backgroundColor: "#952e48",
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
                    <Text style={{ textAlign: "center", fontSize: 19, color: "#480048" }}>Dont Have A Account ?</Text>
                    <Text onPress={() => navigation.navigate("Signup")} style={{
                        textAlign: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#952e48",
                        marginTop: 10
                    }}>Sign Up!</Text>


                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}
