import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUpLogIn ({setToken, endpoint}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();
        try{
            const response = await fetch(`https://fsa-recipe.up.railway.app/api/auth/${endpoint}`,
                {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                            username: username, 
                            password: password
                        })
                }
            )
            const result = await response.json()
            setToken(result.token)
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    const buttonName = endpoint==="login"? "Log In" : "Sign Up"

    return(
        <>
        <form onSubmit={handleSubmit} className="forms">
            <label>
                Username
                <input 
                name="username" 
                onChange={(event)=> setUsername(event.target.value)} 
                //onChange sets the value to state, value gets the value from state
                value={username} required/>
            </label>
            <label>
                Password
                <input 
                name="password" 
                onChange={(event)=> setPassword(event.target.value)} 
                value={password} minLength={6} required/>
            </label>
            <button>{buttonName}</button>
        </form>
        </>
    )
}

export default SignUpLogIn