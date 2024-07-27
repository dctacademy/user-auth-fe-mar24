import {useReducer} from 'react'
import AuthContext from '../context/AuthContext'

const initialState = {
    user: null, 
    isLoggedIn: false 
}

const reducer = (state, action) => {

}

function AuthProvider(props){
    const [state,dispatch] = useReducer(reducer, initialState)

    const handleRegister = () => {

    }

    const handleLogin = () => {

    }

    const handleLogout = () => {

    }

    // handleRegister

    // handleLogin

    // handleLogout

    return (
        <AuthContext.Provider value={{ state, handleRegister, handleLogin, handleLogout }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthProvider

