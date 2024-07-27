import { useState, useContext } from 'react' 
import AuthContext from '../context/AuthContext'

export default function Login(){
    const { handleLogin} = useContext(AuthContext)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password 
        }
        // runClientSideValidations() 
        // after client side validations pass
        handleLogin(formData)
    }
    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter email' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                /> <br />
                <input 
                    type="password" 
                    placeholder='Enter password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                /> <br /> 
                <input type="submit" />
            </form>
        </div>
    )
}