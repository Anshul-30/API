import React, { useState } from 'react'
import { Text, SafeAreaView, View, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'

import TextInputComponent from '../../components/TextInput'
import navigationString from '../../navigation/navigationString'
import { login, login1 } from '../../Redux/actions/auth'
import { moderateScale } from '../../styles/responsiveSize'


export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')

    const onLogin = () => {
        let apiData = {
            phone: phone,
            phone_code: "91",
            device_token: 'KDKFJDKFDFKDFDF',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: pass
        }
        dispatch(login1(apiData))
    }
    return (

        <>
            {/* <StatusBar barStyle='dark-content' backgroundColor={'blue'} /> */}
            <TextInputComponent placeholder='Enter phone number' value={phone} onchangetext={(event) => setPhone(event)} />
            <TextInputComponent placeholder='Enter pass' value={pass} onchangetext={(event) => setPass(event)} />
            <TouchableOpacity onPress={onLogin}>
                <View style={{ backgroundColor: 'lightblue', height: 29, justifyContent: 'center', margin: moderateScale(25) }}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(navigationString.SIGNUP)}>
                <View>
                    <Text style={{ textAlign: 'center' }}>Signup</Text>
                </View>
            </TouchableOpacity>
        </>



    )
}
