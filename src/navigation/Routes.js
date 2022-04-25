import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack'
// import HomeStack from './HomeStack'
import MainStack from './MainStack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                {false ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
