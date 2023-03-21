import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import SigninNavigator from './routes/signinStack';
import MainStack from './routes/mainStack'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {

  const [user, setUser] = useState("Loading")

  useEffect(() => {
    if (!user || typeof user === "string") {
      AsyncStorage.getItem('user').then(r => {
        setUser(JSON.parse(r))
        console.log(JSON.parse(r))
      })
    }
  }, [])

  const Navigators = function () {
    if (!user) {
      return <SigninNavigator setUser={setUser}  />
    }
    else if (typeof user === "string") {
      return
    }
    else {
      return <MainStack setUser={setUser} user={user} />
    }
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigators style={{ opacity: 1 }} />
    </ApplicationProvider>
  );
}