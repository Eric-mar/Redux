import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'
function Login (){
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=> {dispatch(login({name: 'Eric', age: 30 , email: 'eric@gmail.com'}) )}}>Login</button>
            
            <button onClick={()=> {dispatch(logout())}}>logout</button>
        </div>
    )

}
export default Login