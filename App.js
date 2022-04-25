import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/navigation/Routes'
import store from './src/Redux/store'

export default function App() {
  const onSignup = ()=>{
    
  }
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <Provider store={store}>
        <Routes/>
        </Provider>
       
      </SafeAreaView>
    </>
  )
}
