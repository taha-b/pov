import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, Pressable } from 'react-native';
import Header from '../../../components/Signin/Header'
import Inputs from './Inputs';
import { useState } from 'react';
import { signup } from '../../../functions/signin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loading from "../../../components/Loading/Loading"
import Modal from "../../../components/Signin/Modal"

export default function Index({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPass, setCheckPass] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAwareScrollView style={{ backgroundColor: "white", height: "100%" }}
                contentContainerStyle={{ flexGrow: 1 }}>
                {error ? <Modal error={error} setError={setError} /> : null}
                {loading ? <Loading /> : null}

                <Header page={"Signup"} navigation={navigation} />
                <View style={{ height: 80 }} />
                <Inputs
                    email={email} setEmail={setEmail}
                    password={password} setPassword={setPassword}
                    checkPass={checkPass} setCheckPass={setCheckPass} />
                <View style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                }}>
                    <Pressable onPress={() => signup(null, navigation, email, password, checkPass, setError, setLoading)}
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
                        }}>Sign up</Text>
                    </Pressable>
                </View>

            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}
