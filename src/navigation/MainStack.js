import React from 'react'
import Login from '../screens/Login/Login'
import navigationString from './navigationString'
import Signup from '../screens/Signup/Signup'
import HomeStack from './HomeStack'

export default function MainStack(Stack) {
  return (
    <>
    <Stack.Screen name={navigationString.HOME} component={HomeStack}/>
    {/* <stack.Screen name={navigationString.SIGNUP} component={Signup}/> */}

    </>
  )
}
