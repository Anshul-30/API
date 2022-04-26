import React from 'react'
import Login from '../screens/Login/Login'
import navigationString from './navigationString'
import Signup from '../screens/Signup/Signup'
import Home from '../screens/Home/Home'


export default function AuthStack(Stack) {
  return (
    <>
    <Stack.Screen name={navigationString.LOGIN} component={Login}/>
    <Stack.Screen name={navigationString.SIGNUP} component={Signup}/>
    {/* <Stack.Screen name={navigationString.HOME1} component={Home}/> */}

    </>
  )
}
