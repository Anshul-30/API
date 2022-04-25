import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'

import TextInputComponent from '../../components/TextInput'
import navigationString from '../../navigation/navigationString'
import { signUp } from '../../Redux/actions/auth'



export default function Signup({ navigation }) {
  const [state, setState] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    pass: '',

  })
  const { fName, lName, email, pass, phone } = state
  const updateArray = (data) =>  setState((state)=> ({...state, ...data}))

const dispatch = useDispatch()

const onSign = async () => {
  console.log("fna",fName)
  let apiData = {
    first_name: fName,
    last_name: lName,
    email: email,
    phone: phone,
    phone_code: "91",
    country_code: "IN",
    device_token: 'KDKFJDKFDFKDFDF',
    device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
    password: pass
    
  }
  try {
    const res = await dispatch(signUp(apiData))
    console.log("singnup api res_+++++", res)
    alert("User signup successfully....!!!")
} catch (error) {
    console.log("error raised", error)
    alert(error?.message)
}
  // dispatch(signUp(apiData))
  // alert("sign in ")
  // navigation.navigate(navigationString.LOGIN)
}
return (
  <View>
    <TextInputComponent placeholder='Enter First Name' onchangetext={(event) => updateArray({fName:event})} value={fName} />
    <TextInputComponent placeholder='Enter Last Name' onchangetext={(event) => updateArray({lName:event})} value={lName} />
    <TextInputComponent placeholder='Enter Email' onchangetext={(event) => updateArray({email:event})} value={email} />
    <TextInputComponent placeholder='Enter Phone number' onchangetext={(event) => updateArray({phone:event})} value={phone} />
    <TextInputComponent placeholder='Enter Paaword' onchangetext={(event) => updateArray({pass:event})} value={pass} />
    <TouchableOpacity onPress={onSign}>
      <View>
        <Text style={{ textAlign: 'center' }}> SignIn</Text>
      </View>
    </TouchableOpacity>
  </View>

)
}
