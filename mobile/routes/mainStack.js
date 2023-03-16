import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import TripList from '../screens/main/tripList/index'
import PointList from '../screens/main/pointList/index'
import PointDetails from '../screens/main/pointDetails/index'
const Stack = createNativeStackNavigator();

function SigninStack({ user }) {
    const [header, setHeader] = useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: header }}>
                <Stack.Screen name="Trips">
                    {(props) => <TripList {...props} user={user} setHeader={setHeader} />}
                </Stack.Screen>
                <Stack.Screen name="Points">
                    {(props) => <PointList {...props} user={user} />}
                </Stack.Screen>
                <Stack.Screen name="Details">
                    {(props) => <PointDetails {...props} user={user} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SigninStack;
