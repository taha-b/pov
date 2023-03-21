import { View, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Text, Input } from '@ui-kitten/components';
import { editProfile } from "../../functions/signin"
import Modal from "../../components/Signin/Modal"
import Loading from "../../components/Loading/Loading"

export default function index({ setUser, user }) {

  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log(user.name)
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#C04848", "#480048"]}
        end={{ x: 0, y: 1 }}
        start={{ x: 1, y: 0 }}
        style={{ width: "100%", height: "100%" }}>
        {error ? <Modal error={error} setError={setError} /> : null}
        {loading ? <Loading /> : null}

        <View style={{
          width: 110, height: 110,
          marginTop: "40%",
          alignSelf: "center",
        }}>
          <Image style={{ width: "100%", height: "100%", borderRadius: 70 }}
            source={{ uri: "https://cdn.discordapp.com/attachments/1073737355896299542/1086281404972814497/9908fc00-5398-11ec-b7bf-8dded52a981b.cf.jpg" }}
          />
        </View>
        <View style={{ marginTop: "10%" }} />
        <Text
          style={{ color: "white", width: "100%", textAlign: "center", fontSize: 28 }}
          category="h1">{user?.name ? user.name : "_"}</Text>
        <Text
          style={{ width: "100%", textAlign: "center", fontSize: 20, marginTop: "5%" }}
          category="h1"> {user?.email}
        </Text>
        <Divider style={{
          marginTop: "5%",
          backgroundColor: '#222b45',
          width: "80%",
          alignSelf: "center"
        }} />


        <Input
          placeholder='Name'
          value={name}
          onChangeText={nextValue => setName(nextValue)}
          style={{
            width: "80%",
            alignSelf: "center",
            backgroundColor: "transparent",

          }}
          textStyle={{ color: "white", textAlign: "center", }}
        />
        <Input
          placeholder='Password'
          value={password}
          onChangeText={nextValue => setPassword(nextValue)}
          style={{
            width: "80%",
            alignSelf: "center",
            backgroundColor: "transparent",
            marginTop: "5%",
          }}
          secureTextEntry={true}

          textStyle={{ color: "white", textAlign: "center", }}
        />
        <Input
          placeholder='Confirm Password'
          value={checkPass}
          onChangeText={nextValue => setCheckPass(nextValue)}
          style={{
            width: "80%",
            alignSelf: "center",
            backgroundColor: "transparent",
            marginTop: "5%",
          }}
          secureTextEntry={true}

          textStyle={{ color: "white", textAlign: "center", }}
        />
        <TouchableOpacity
          onPress={() => editProfile(setUser, name, password, checkPass, user.id, user.email, setError, setLoading)}
          style={{
            alignSelf: "center",
            width: "40%",
            height: 40,
            marginTop: "10%",
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }}>
          <Text category='s1' style={{ color: "white", }}>
            Save
          </Text>
        </TouchableOpacity>

      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
