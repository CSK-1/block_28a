import SignUpLogIn from "./SignUpLogIn"

function Register ({setToken}) {
    return(
        <>
        <SignUpLogIn setToken={setToken} endpoint={"register"}/>
        </>
    )
}

export default Register