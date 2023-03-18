import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import TripList from '../screens/main/tripList/index'
import PointList from '../screens/main/pointList/index'
import PointDetails from '../screens/main/pointDetails/index'
import EditProfile from '../screens/editProfile/index'
import History from "../screens/history/index"
const Stack = createNativeStackNavigator();

function SigninStack({ user, setUser }) {
    const [header, setHeader] = useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: header }}>
                <Stack.Screen name="Trips">
                    {(props) => <TripList {...props} setUser={setUser} user={user} setHeader={setHeader} />}
                </Stack.Screen>
                <Stack.Screen name="Points">
                    {(props) => <PointList {...props} user={user} />}
                </Stack.Screen>
                <Stack.Screen name="Details">
                    {(props) => <PointDetails {...props} setUser={setUser} user={user} />}
                </Stack.Screen>
                <Stack.Screen name="Edit">
                    {(props) => <EditProfile {...props} setUser={setUser} user={user} />}
                </Stack.Screen>
                <Stack.Screen name="History">
                    {(props) => <History {...props} user={user} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SigninStack;
