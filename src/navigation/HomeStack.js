import React from 'react'
import Login from '../screens/Login/Login'

import Signup from '../screens/Signup/Signup'
import navigationString from './navigationString'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
const Stack = createStackNavigator()
export default function HomeStack(stack) {
  return (
    <>
   <Stack.Navigator>
     <Stack.Screen name={navigationString.HOME} component={Home}/>
   </Stack.Navigator>

    </>
  )
}
