import { useContext } from "react"
import AuthContext from "../context/AuthContext"
export default function Profile(){
    const { state } = useContext(AuthContext)
    if(!state.user) {
        return <p>loading...</p>
    }
    return (
        <div>
            <h2>Profile Page</h2>
            <p>email - { state.user.email } </p>
            <p>register date - { state.user.createdAt } </p>
        </div>
    )
}