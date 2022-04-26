import {LOGIN, SIGNUP} from '../../config/urls';
import types from '../types';
import {apiPost} from '../../utils/utils';
import store from '../store';
const {dispatch} = store


const saveUserData =(data)=>{
  dispatch({
    type:types.LOGIN,
    payload:data
  })
}


export function signUp(data) {
  console.log('fher', data);
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const login = (data) => {
  console.log(data, 'the given data')
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        saveUserData(res.data)
        resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
};
