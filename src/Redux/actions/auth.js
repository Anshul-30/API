import types from "../types";

export const login =(data)=>{
return{
    type:types.SIGNUP,
    payload:data
}
}

export function signUp(data) {
    return apiPost(SIGNUP, data);
  }
  
  
  export const login1 = (data) => {
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
  