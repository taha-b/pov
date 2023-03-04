import { StyleSheet, Text, View, TextInput } from 'react-native';
import Login from "./screens/Login/Index"
import Signup from "./screens/Signup/Index"
import { useState } from 'react';

export default function App() {
  const [view, setView] = useState("Login")

  const Views = function () {
    if (view === "Login") {
      return <Login setView={setView} />
    }
    else if (view === "Signup") {
      return <Signup setView={setView}/>
    }
  }
  return (
    <View style={{ backgroundColor: "white" }}>
      <Views />
    </View>
  );
}
