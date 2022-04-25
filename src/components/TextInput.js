import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { moderateScale } from '../styles/responsiveSize'


const TextInputComponent = ({
  placeholder,
  onchangetext,
  value

})=> {
  return (
    <View style={input.container}>

      <TextInput style={{ padding: 5 }}
        placeholder={placeholder}
        onChangeText={onchangetext}
        value={value} />
    </View>
  )
}
export default TextInputComponent


const input = StyleSheet.create({
  container: {
    margin: moderateScale(10),
    borderWidth: .5,
    borderRadius: 5,
    height: 35,
    borderColor: 'black',
    justifyContent: 'center'
  }
})