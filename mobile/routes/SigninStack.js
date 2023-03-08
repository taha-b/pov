import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login/index"
import Signup from "../screens/signup/index"
import Welcome from "../screens/signup/welcome"

const Stack = createNativeStackNavigator();

function SigninStack({ setUser }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login">
                    {(props) => <Login {...props} setUser={setUser} />}
                </Stack.Screen>
                <Stack.Screen name="Signup">
                    {(props) => <Signup {...props}  />}
                </Stack.Screen>
                <Stack.Screen name="Welcome">
                    {(props) => <Welcome {...props} setUser={setUser} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SigninStack;
