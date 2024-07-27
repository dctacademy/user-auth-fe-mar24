import {useReducer, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
const initialState = {
    user: null, 
    isLoggedIn: false 
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_USER' : {
            return {...state, isLoggedIn: true, user: action.payload }
        } 
        case 'LOGOUT_USER' : {
            return {...state, isLoggedIn: false, user: null }
        }
    }
}

function AuthProvider(props){
    const navigate = useNavigate()
    const [state,dispatch] = useReducer(reducer, initialState)

    useEffect(() => { // handle page reload 
        (async () => {
            if(localStorage.getItem('token')) {
                try {
                    const userResponse = await axios.get('http://localhost:3030/api/users/account', { headers: { 'Authorization': localStorage.getItem('token')}})
                    dispatch({ type: 'LOGIN_USER', payload: userResponse.data })
                } catch(err) {
                    
                }
            }
        })();
    }, [])

    const handleRegister = async (formData) => {
        try { 
            const response = await axios.post('http://localhost:3030/api/users/register', formData)
            toast('Successfully Registered', { autoClose: 2000 })
            navigate('/login')
        } catch(err) {
            console.log(err)
        }

    }

    const handleLogin = async (formData) => {
        try {
            const response = await axios.post('http://localhost:3030/api/users/login', formData)
            localStorage.setItem('token', response.data.token)
            toast('successfully logged in')
            const userResponse = await axios.get('http://localhost:3030/api/users/account', { headers: { 'Authorization': localStorage.getItem('token')}})
            dispatch({ type: 'LOGIN_USER', payload: userResponse.data })
            navigate('/dashboard')
        } catch(err) {

        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch({ type: 'LOGOUT_USER' })
        toast("successfully logged out")
        navigate('/login')
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


/*
1. Create Login Component - with form input - email & password
2. write client side validation
3. if the validation pass
    then call the handleLogin(formData)
4. inside handleLogin -> make api call to '/api/users/login' 
5. once the password credential match, write the token to the localStorage 
6. notify via toast user has logged in successfully

*/ 