import { TabActions } from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {useDispatch} from 'react-redux';

import TextInputComponent from '../../components/TextInput';
import actions from '../../Redux/actions';

import {signUp} from '../../Redux/actions/auth';

export default function Signup() {
  const [state, setState] = useState({
    fName: 'sad',
    lName: 'ds',
    email: 'sa121@gail.com',
    phone: '8009467543',
    pass: '123456',
  });
  const {fName, lName, email, pass, phone} = state;
  const updateArray = data => setState(state => ({...state, ...data}));

  // const dispatch = useDispatch();

  const onSign = async () => {
    console.log('fna', fName);
    let apiData = {
      first_name: fName,
      last_name: lName,
      email: email,
      phone: phone,
      phone_code: '91',
      country_code: 'IN',
      device_token: 'KDKFJDKFDFKDFDF',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: pass,
    };
    // actions.signUp(apiData)
    
    //   .then(res => {
    //     console.log('singnup api res_+++++', res);
    //     alert('User signup successfully....!!!');
    //   })
    //   .catch(err => {
    //     console.log(err,"err");
    //     alert(err?.message);
    //   });
    try
     {
      const res = await actions.signUp(apiData)
      console.log('singnup api res_+++++', res);
      alert('User signup successfully....!!!');
    }
    catch (error) {
      console.log('error raised', error);
      alert(error?.message);
    }
  };
  return (
    <View>
      <TextInputComponent
        placeholder="Enter First Name"
        onchangetext={event => updateArray({fName: event})}
        value={fName}
      />
      <TextInputComponent
        placeholder="Enter Last Name"
        onchangetext={event => updateArray({lName: event})}
        value={lName}
      />
      <TextInputComponent
        placeholder="Enter Email"
        onchangetext={event => updateArray({email: event})}
        value={email}
      />
      <TextInputComponent
        placeholder="Enter Phone number"
        onchangetext={event => updateArray({phone: event})}
        value={phone}
      />
      <TextInputComponent
        placeholder="Enter Paaword"
        onchangetext={event => updateArray({pass: event})}
        value={pass}
      />
      <TouchableOpacity onPress={onSign}>
        <View>
          <Text style={{textAlign: 'center'}}> SignIn</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
