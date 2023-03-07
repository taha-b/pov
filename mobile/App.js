import { View } from 'react-native';
import Login from "./screens/login/index"
import Signup from "./screens/signup/index"
import Main from "./screens/main/index"
import { useState } from 'react';

export default function App() {
  const [view, setView] = useState("Login")
  const [user, setUser] = useState(null)

  const Views = function () {
    if (!user) {
      if (view === "Login") {
        return <Login setView={setView} setUser={setUser} />
      }
      else if (view === "Signup") {
        return <Signup setView={setView} setUser={setUser} />
      }
    }
    else {
      return <Main user={user} setUser={setUser} />

    }
  }
  return (
    <View>
      <Views />
    </View>
  );
}
