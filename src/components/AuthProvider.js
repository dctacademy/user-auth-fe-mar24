import {useReducer} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
const initialState = {
    user: null, 
    isLoggedIn: false 
}

const reducer = (state, action) => {

}

function AuthProvider(props){
    const navigate = useNavigate()
    const [state,dispatch] = useReducer(reducer, initialState)

    const handleRegister = async (formData) => {
        try { 
            const response = await axios.post('http://localhost:3030/api/users/register', formData)
            toast('Successfully Registered', { autoClose: 2000 })
            navigate('/login')
        } catch(err) {
            console.log(err)
        }

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

