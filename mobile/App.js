import React, { useState } from 'react';
import * as Font from 'expo-font';
import SigninNavigator from './routes/SigninStack';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


export default function App() {
  // const [user, setUser] = useState({ name: "admin" })
  const [user, setUser] = useState(null)

  const Navigators = function () {
    if (!user) {
      return <SigninNavigator setUser={setUser} />
    }
    else {
      return null
    }
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigators />
    </ApplicationProvider>
  );
}