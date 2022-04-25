import types from "../types"

const initialState ={
    userdata:{}
}
const Login =(state = initialState,action)=>{
    switch(action.type){
        // case types.SIGNUP:{

        // }
        case types.LOGIN:{
                const data = action.payload
                console.log(data)
                return{
                    userdata:data
                }
        }
        default:
            return state
    }
}

export default Login